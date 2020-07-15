<template>
	<v-container>
		<v-layout row>
			<v-flex mt-3 mb-5>
				<h1 class="display-1">その他</h1>
			</v-flex>
		</v-layout>

		
		<v-layout row>
			<v-flex ml-5>
				<p class="body-1">準備中です...</p>
			</v-flex>
		</v-layout>
		

		<!--
		<v-layout ml-5 mb-5 wrap>
			<v-flex>
				<h2 class="headline font-weight-bold mb-1">
				<router-link class='tip-title-txt':to="'/Others::cpp_tensorflow'">
            	c++から学習済みtensorflowモデルを呼び出す
            	</router-link></h2>
				<p class="subtitle-1 mb-3">(c++, tensorflow)</p>
				<p class="body-1">pythonで学習させたモデルをc++から利用したいよねっていう話です。
				tensorflowのc++ apiを上手くbuildできなかったので、c apiを使っています。(※GPUでは試せていません。CPU Onlyのお話です。)</p>
			</v-flex>
		</v-layout>
		-->

	</v-container>
</template>


<style>
.tip-title-txt{
  font-family: SegoeUI,Helvetica,sans-serif;
  color:#007641;
  text-decoration: none;
}
</style>