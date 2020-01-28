<template>
  <v-container>
	  <v-layout text-xs-left wrap>
      <v-flex xs12 mb-6>
        <h1 class="display-1 font-weight-bold mb-5">Publications</h1>
      </v-flex>

      <!-- 国際会議 -->    
      <v-flex xs12 mb-5>
      <h1 class="display-0 mb-2">国際会議</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          <b>Yushi Sato</b>, Naruki Tanabe, Kohei Morita, Takefumi Hiraki, Parinya Punpongsanon, Haruka Matsukura, Daisuke Iwai, Kosuke Sato, "Pseudo-Haptic Feedback in a Projected Virtual Hand for Tactile Perception of Textures," In Proceedings of IEEE World Haptics Conference 2019 (Work-in-progress), WP1P.09, 2019.7.
        </li> 
        <li class="headline mb-2">
          <b>Yushi Sato</b>, Naruki Tanabe, Kohei Morita, Takefumi Hiraki, Parinya Punpongsanon, Haruka Matsukura, Daisuke Iwai, Kosuke Sato, "Pseudo-Haptic Feedback in a Projected Virtual Hand for Tactile Perception of Textures," In Proceedings of IEEE World Haptics Conference 2019 (Hands-on Demos), DM2.09, 2019.7.
        </li> 
        <li class="headline mb-2">
          Naruki Tanabe, <b>Yushi Sato</b>, Kohei Morita, Michiya Inagaki, Yuichi Fujino, Parinya Punpongsanon, Haruka Matsukura, Daisuke Iwai, and Kosuke Sato, "fARFEEL: Providing Haptic Sensation of Touched Objects using Visuo-Haptic Feedback," In Proceedings of IEEE VR 2019 Demonstrations, pp.1355-1356, 2019.3.
        </li> 
      </ol>
      </v-flex>

      <!-- 国内会議 -->    
      <v-flex xs12 mb-5>
      <h1 class="display-0 mb-2">国内会議</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          <b>佐藤優志</b>，平木剛史，田辺育暉，松倉悠，岩井大輔，佐藤宏介，"投影バーチャルハンドインタフェースへの疑似触覚の適用に関する一考察"，第60回複合現実感研究会(SIG-MR)，p.xxx-xxx, 2020.1．
        </li> 
        <li class="headline mb-2">
          <b>佐藤優志</b>，平木剛史，田辺育暉，松倉悠，岩井大輔，佐藤宏介，"投影手インタフェースの疑似触覚フィードバックによる材質感呈示手法"，質感のつどい第5回公開フォーラム（ポスター発表），2019.12．
        </li> 
        <li class="headline mb-2">
          <b>佐藤優志</b>，田辺育暉，森田耕平，プンポンサノン パリンヤ，松倉悠，岩井大輔，佐藤宏介，"投影バーチャルハンドの疑似触覚フィードバックによる接触感呈示"，第63回システム制御情報学会研究発表講演会講演論文集(SCI'19)，p.1371-1378，2019.5．
        </li> 
        <li class="headline mb-2">
          森田耕平，田辺育暉，<b>佐藤優志</b>，プンポンサノン パリンヤ，松倉悠，岩井大輔，佐藤宏介，"頭部方向を用いた投影型拡張仮想手の操作範囲の拡張"，第63回システム制御情報学会研究発表講演会講演論文集(SCI'19)，p.1375-1381，2019.5．
        </li> 
        <li class="headline mb-2">
          <b>佐藤優志</b>，"バーチャルハンドのPseudo-Haptic Feedbackによる材質感呈示手法"，第8回サイエンス・インカレ研究発表会要約集，発表番号47，p.53，2019.3．
        </li> 
        <li class="headline mb-2">
          <b>佐藤優志</b>，西田茂生，"曲面多色像ホログラムの開発"，第24回精密工学会学生会員卒業研究発表講演会論文集(JSPE'17)，p.41-42，2017.3．
        </li> 
      </ol>
      </v-flex>
    
      <!-- 受賞 -->    
      <v-flex xs12 mb-5>      
      <h1 class="display-0 mb-2">受賞</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          ファーウェイ賞 (<b>佐藤優志</b>，"バーチャルハンドのPseudo-Haptic Feedbackによる材質感呈示手法") (2019.3).
        </li> 
        <li class="headline mb-2">
          SCI学生発表賞 (<b>佐藤優志</b>，田辺育暉，森田耕平，プンポンサノン パリンヤ，松倉悠，岩井大輔，佐藤宏介，"投影バーチャルハンドの疑似触覚フィードバックによる接触感呈示") (2019.5).
        </li> 
      </ol>
      </v-flex>

      <!-- その他・Web報道 -->    
      <v-flex xs12 mb-5>
      <h1 class="display-0 mb-2">その他・Web報道</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          Seamless (<a href="https://shiropen.com/seamless/farfeel" target="_blank">https://shiropen.com/seamless/farfeel</a>)
        </li> 
        <li class="headline mb-2">
          MoguraVR (<a href="https://www.moguravr.com/world-haptics-conference-2019" target="_blank">https://www.moguravr.com/world-haptics-conference-2019</a>)
        </li> 
      </ol>
      </v-flex>


    </v-layout>
	</v-container>
</template>

<style>

</style>
<!-- jsonから読み込む用

<script lang="ts"> 
import Publications from '@/static/data/publications.json';

export default {
  name: 'Publications',
  data() {
    return {
			items: Publications,
    };
  },
};
 -->
 
</script>
