<template>
  	<v-container>
      <v-layout row wrap mt-3 mb-3>
		  <h1 class="display-0" style="color:rgb(0, 118, 65)">シェッフェの一対比較法（浦の変法）の元論文について</h1>
      </v-layout>


      <p class="body-2">　研究で得られたデータをシェッフェの一対比較法（浦の変法）で解析する機会があったのですが、
      <br>いざ参考文献を引く際に大元の論文の正確な情報がなかなか見つからなかったので、その時の情報をば。</p>

      <br>
      <br>

      <p>シェッフェの一対比較法（浦の変法）を使っている他の論文の参考文献を見ると、</p>
      <ul>
      <li>S. Ura, "An Analysis of a Paired Comparison Experiment," Quality Control,
      Vol.16, pp.78-80 (1959). (in Japanese)</li>
      </ul>
      </br>
      <p>とよく引かれていたのですが、調べてみるとどうやら品質管理で1959年に第16巻は出版されていなさそう...
      <br>真相を明らかにすべく、品質管理が揃っている阪大吹田キャンパスの図書館に直行。</p>
      <br>
      <h3>調査結果</h3>
      <p>　1959年2月10日に発行された品質管理、第10巻、第2号のpp. 78-80に浦先生の変法が載っていました。
      <br>ですので、この論文を引く際は、</p>
      <ul>
      <li>浦昭二, 1対比較実験の解析, 品質管理, Vol. 10, No. 2, pp. 78-80, 1959. 
      <li>Syoji Ura, "An Analysis of a Paired Comparison Experiment," Statistical Quality Control, Vol. 10, No. 2, pp. 78-80, 1959. (in Japanese)  </li>
      </ul>
      <br>
      <p>などとした方が良いでしょう。</p>
      <br>

      <v-layout>
      <v-flex lg3 lx3>
      <v-img :src="require('../../assets/images/others/scheffe_ura_title.jpg')" contain height="300"></v-img>
      </v-flex>
      <v-flex lg3 lx3>
      <v-img :src="require('../../assets/images/others/scheffe_ura_paper.jpg')" contain height="300"></v-img>
      </v-flex>
      </v-layout>
      <br>

  	</v-container>
</template>

<style>
</style>