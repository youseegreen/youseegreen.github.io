<template>

	<v-container style="width:70%">
		<v-layout text-xs-center wrap class="home-hero__content" mb-5>
			<v-flex xs12 mt-5 mb-5>
				<h1 class="display-2 green--text text--darken-3 font-weight-bold mt-3 mb-3">Welcome to Yushi's HP!</h1>
			</v-flex>
		</v-layout>

		<v-layout text-xs-left wrap ml-2>	
			<v-flex>
				<h1 class="display-0 font-weight-bold mb-2">News</h1>
				<v-divider class="mb-3"></v-divider>
				<p class="title ml-4 mb-5 font-weight-regular">
					2019/09/15　ホームページ開設
				</p>
			</v-flex>
		</v-layout>

		<v-layout text-xs-left wrap ml-2>	
			<v-flex>
				<h1 class="display-0 font-weight-bold mb-2">Links</h1>
				<v-divider class="mb-3"></v-divider>

				<p v-for="(eco, i) in link":key="i">
					<a v-bind:href=eco.href style="text-decoration:none;" class="title font-weight-regular xs12 ml-4" target="_blank">
					<font-awesome-icon v-bind:icon=eco.icon color="#4169e1"/>
					{{eco.text}}</a>
				</p>
			</v-flex>
		</v-layout>



		<!-- 中心に寄せたい場合
		<v-layout text-xs-center wrap>	
			<h1 class="display-0 font-weight-bold mb-2">Links</h1>
			<v-divider class="mb-3"></v-divider>
		</v-layout>

		<v-layout text-xs-center wrap>	
			<v-flex v-for="(eco, i) in link":key="i">
				<a href=eco.href class="subheading mx-3" target="_blank">
				{{ eco.text }}</a>
			</v-flex>
		</v-layout>

		-->

			<!--
				<a 
						v-for="(eco, i) in link"
						:key="i"
						:href="eco.href"
						class="title font-weight-regular xs12 ml-4"
						target="_blank"
					>　{{ eco.text }}　</a>
			-->
	

				<!-- 真ん中に寄せる場合 
				<v-flex xs12 mb-5>
				<h2 class="display-1 font-weight-bold mb-3">Links</h2>

				<v-layout justify-center>
					<a
						v-for="(eco, i) in link"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
					>{{ eco.text }}</a>
				</v-layout>
				-->


			</v-flex>
			</v-flex>	
			</v-layout>
		</v-layout>
	</v-container>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
	private link = [
		{
			text: 'Github',
			icon: 'link',
			href: 'https://github.com/youseegreen',
		},
		{
			text: '研究室',
			icon: 'link',
			href: 'https://www.sens.sys.es.osaka-u.ac.jp/',
		},
		{
			text: '研究ページ',
			icon: 'link',
			href: 'https://www.extendedhand.net/',
		},
	];
}
</script>

<style>

.home-hero__content {
  background: url("../assets/home_photo.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 70vh;
}

</style>