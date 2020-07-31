# <span style="color:rgb(0, 118, 65)">UnityのNetivePlugin利用でc++上でのDebugを少し便利にしてみる</span>

> &emsp;Unityでc++のコードを利用する際にNative Pluginを利用する方法があるのですが、如何せんDebugが面倒くさい。Unityを起動しながらDebugする方法も紹介されていますが、この記事では、Unityと連携させる前の段階で使えるであろう方法を紹介しておきます。


### 環境
- Visual Studio 2017
- Unity 2019.3


### 普通のNative Pluginプログラム
- lib.h  
c#(Unity)から呼び出す時のインタフェース

    ``` lib.h cpp
    // Native Plugin用の決まり文句
    #define UNITY_INTERFACE_API __stdcall
    #define UNITY_INTERFACE_EXPORT __declspec(dllexport)

    // ヘッダファイルのロード
    #include <iostream>
    // その他自由に...

    // Native Plugin用の決まり文句
    extern "C"
    {
        //インタフェース（Unityで使う関数）の宣言
        UNITY_INTERFACE_EXPORT int UNITY_INTERFACE_API SampleFunction1(int a, int b);
        UNITY_INTERFACE_EXPORT bool UNITY_INTERFACE_API SampleFunction2(int a[], int n);
        //他自由に...
    }
    ```

- lib.cpp  
インタフェースの実装

``` lib.cpp cpp
//ヘッダファイルのロード
#include "lib.h"
//その他必要に応じて

extern "C"
{
    //グローバル変数、クラス等定義
    int g_hoge;
    //自由に...


    //インタフェース（関数）の実装
    UNITY_INTERFACE_EXPORT int UNITY_INTERFACE_API SampleFunction1(int a, int b){
        return a + b;
    }

    UNITY_INTERFACE_EXPORT bool UNITY_INTERFACE_API SampleFunction2(int a[], int n){
        for(int i = 0; i < n; i++)
            if(a[i] != 0)return false;
        return true;
    }

    //その他実装

}
```

これをビルドしてdllファイルを作成。UnityプロジェクトのAssets/Pluginsにdllを配置してUnityプログラム側から呼び出して実行していると思います。


ビルドイベントを設定してビルドすれば自動的にUnityプロジェクト内にdllを配置したり、[凹みさんの記事](https://www.google.co.jp/)にあるようにUnityを立ち上げながらでもdllを上書きしたり（僕はちょっと試してみたけど無理でしたorz）、色々Debugを楽にする手法があります。

が、そもそもUnityを立ち上げるのが面倒なこともあります（開発初期時、プログラムのDebugなど）。

そこで、以下のようにプログラムをちょっと書き換えます。


### 下記のように変更
- lib.h  
c#(Unity)から呼び出す時のインタフェース

``` lib.h cpp
//コメントアウト：dll作成モード、
//コメントアウトなし：debugモードmain関数必要
//それに合わせて、プロジェクトのプロパティの構成の種類をexeとdllに切り替える必要あり
//#define DEBUG_MODE 


#ifdef DEBUG_MODE
#define UNITY_INTERFACE_API  
#define UNITY_INTERFACE_EXPORT  
#else
#define UNITY_INTERFACE_API __stdcall
#define UNITY_INTERFACE_EXPORT __declspec(dllexport)
#endif

// Native Plugin用の決まり文句
#define UNITY_INTERFACE_API __stdcall
#define UNITY_INTERFACE_EXPORT __declspec(dllexport)

// ヘッダファイルのロード
#include <iostream>
// その他自由に...


#ifndef DEBUG_MODE
extern "C"
{
#endif
    //インタフェース（Unityで使う関数）の宣言
    UNITY_INTERFACE_EXPORT int UNITY_INTERFACE_API SampleFunction1(int a, int b);
    UNITY_INTERFACE_EXPORT bool UNITY_INTERFACE_API SampleFunction2(int a[], int n);
    //他自由に...
#ifndef DEBUG_MODE
}
#endif
```

- lib.cpp  
インタフェースの実装
``` lib.cpp cpp
//ヘッダファイルのロード
#include "lib.h"
//その他必要に応じて
#ifndef DEBUG_MODE
extern "C"
{
#endif // !DEBUGMODE

    //グローバル変数、クラス等定義
    int g_hoge;
    //自由に...


    //インタフェース（関数）の実装
    UNITY_INTERFACE_EXPORT int UNITY_INTERFACE_API SampleFunction1(int a, int b){
        return a + b;
    }

    UNITY_INTERFACE_EXPORT bool UNITY_INTERFACE_API SampleFunction2(int a[], int n){
        for(int i = 0; i < n; i++)
            if(a[i] != 0)return false;
        return true;
    }

    //その他実装

#ifndef DEBUG_MODE
}
#endif // !DEBUGMODE
```


- main.cpp  
c#(Unity)プログラムの再現
``` lib.cpp cpp
#include "lib.h"

#ifdef DEBUG_MODE

//自由にglobal変数を定義

int main() {
    int a = 2, b = 5;
    
    std::cout << "SampleFunction1のDebug：" << SampleFunction1(a, b) << std::endl;

    int c[10] = { 0 };
    std::cout << "SampleFunction2のDebug：" << SampleFunction2(c, 10) << std::endl;
    
	return 1;

}
#endif // !DEBUGMODE
```

lib.hのDEBUG_MODEのコメントアウトの切り替えと、プロジェクトのプロパティ⇒全般⇒構成の種類の.dllと.exeを切り替えるだけで、main関数でお手軽にDebugと.dll吐き出しを両立できる。


Unityとの連携度が低い箇所（例えば、カメラから画像取得して、その画像を処理して、その結果をUnityに送信する際に、Visual Studio側だけでDebugできる。）

### 注意点
VSでのDebugでは上手く動いていたのに、dll化してUnityで使う際に動かないケースもある。（特に、コンストラクタとデストラクタの部分。Unityだと、デストラクタできちんと解放、初期化準備をしないとエラーになることが多い。）

  
開発初期段階やUnityとの関連が低い箇所の実装なら便利かも？


