<template>
	<v-container style="width:100%">
		<v-layout>
			<v-flex mt-3 mb-5>
				<h1 class="display-1">プロジェクト</h1>
			</v-flex>
		</v-layout>

		<v-layout row>
			
			<!-- offset：offset-md1 offset-xl1) -->
			<v-flex xs4 sm4 md4 xl4 mr-5 ml-5>
				<v-img :src="require('../assets/project1.gif')" contain></v-img>
			</v-flex>
			<v-flex xs6 sm6 md6 xl6>
				<h2 class="headline font-weight-bold mb-1">投影バーチャルハンドインタフェースに対する疑似触覚フィードバックの応用</h2>
				<p class="subtitle-1 mb-3">(IEEE WHC 2019, IEEE Access)</p>
				<p class="body-1">ユーザの手の動きに連動して動くバーチャルハンドをプロジェクタから投影する投影バーチャルハンドインタフェースは、日常生活でのユーザの手の届く範囲を拡張することができます。しかし、投影バーチャルハンドが実物体に重なった際、ユーザはその物体に触れている感覚を得られません。本プロジェクトでは、投影バーチャルハンドが実物体に触れた際に、バーチャルハンドに視覚効果を付与することで、疑似触覚フィードバックによりユーザにその物体の触感を知覚させる手法を提案しました。</p>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<style>
</style>