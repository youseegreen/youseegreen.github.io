<template>
	<v-container>

		<v-layout row>
			<v-flex mt-3 mb-5>
				<h1 class="display-1">その他</h1>
			</v-flex>
		</v-layout>

		<v-layout ml-3 mb-5 wrap>
			<v-card>
				<v-flex ml-3 mt-3 mb-3 mr-3>
					<h2 class="headline font-weight-bold mb-3">
					<router-link class='tip-title-txt':to="'/Others<Scheffe_Ura_version>'">
            		シェッフェの一対比較法（浦の変法）の元論文について
            		</router-link></h2>
					<!-- <p class="subtitle-1 mb-3">(雑談)</p>-->
					<p class="body-1">研究で得られたデータをシェッフェの一対比較法（浦の変法）で解析する機会があったのですが、いざ参考文献を引く際に大元の論文の正確な情報がなかなか見つからなかったので、その時の情報をば。</p>
				</v-flex>
			</v-card>
		</v-layout>

		<!--
		<v-layout ml-3 mb-5 wrap>
			<v-card>
				<v-flex ml-3 mt-3 mb-3 mr-3>
					<h2 class="headline font-weight-bold mb-1">
					<router-link class='tip-title-txt':to="'/Others<cpp_tensorflow>'">
            		c++から学習済みtensorflowモデルを呼び出す
            		</router-link></h2>
					<p class="subtitle-1 mb-3">(c++, tensorflow)</p>
					<p class="body-1">pythonで学習させたモデルをc++から利用したいよねっていう話です。
					tensorflowのc++ apiを上手くbuildできなかったので、c apiを使っています。(※GPUでは試せていません。CPU Onlyのお話です。)</p>
				</v-flex>
			</v-card>
		</v-layout>

		<v-layout ml-3 mb-5 wrap>
			<v-card>
				<v-flex ml-3 mt-3 mb-3 mr-3>
					<h2 class="headline font-weight-bold mb-1">
					<router-link class='tip-title-txt':to="'/Others<vrm_for_cluster>'">
            		BlenderとUnityでCluster用の.vrmファイルを作成する
            		</router-link></h2>
					<p class="subtitle-1 mb-3">(cluster, unity, blender)</p>
					<p class="body-1">clusterでは自前モデルをサポートしているけど制限が多くて使えない！って時に、BlenderとUnityを使って自前モデルを圧縮して使えるようにするというお話です。何番煎じでしょうか...</p>
				</v-flex>
			</v-card>
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