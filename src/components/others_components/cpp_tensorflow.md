# Python&Tensorflowで学習させたモデルをc++から利用する

## 得られた結果



## 環境
- Windows10 (64bit)
- Visual Studio 2017
- tensorflow (cpu): 1.15.0
- keras: 2.2.4

- Realsense D435i
- Realsense SDK 2.0
- OpenCV 3.4.1


## 方法
### 1. Pythonでモデル学習
今回は、U-Netで学習させました。  
RNNとかだと上手くいくか未検証です。  


### 2. 学習済みモデルの吐き出し
次のサンプルコードを実行する。  
(http://を使わさせていただきました。ありがとうございます。)

### 3. Visual Studioの設定
1. Tensorflow C apiのダウンロード  
（※c++ APIではありません。c++ APIはbuildエラーで断念しました...）

2. ダウンロードしたファイル群を適切に配置、パスを通す。

3. Visual Studioで空のプロジェクトを設定。

4. Visual Studioプロジェクト
 