<template>
	<v-container>
		<v-layout text-xs-center wrap>
			<v-flex xs12 mb-3>
				<v-img :src="require('../assets/home_photo.jpg')" class="my-3" contain height="300"></v-img>
			</v-flex>

			<v-flex xs12 mb-5>
				<h1 class="display-2 font-weight-bold mb-3">Welcome to Yushi's page!</h1>
				<p class="subheading font-weight-regular">
					佐藤優志のホームページです
				</p>
			</v-flex>	

			<v-flex xs12 mb-5>
				<h1 class="display-1 font-weight-bold mb-3">News</h1>
				<p class="subheading font-weight-regular">
					2019/09/15　ホームページ開設
				</p>
			</v-flex>

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
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
	private link = [
		{
			text: 'github',
			href: 'https://github.com/youseegreen',
		},
		{
			text: '研究室',
			href: 'https://www.sens.sys.es.osaka-u.ac.jp/',
		},
		{
			text: '研究ページ',
			href: 'https://www.extendedhand.net/',
		},
	];
}
</script>

<style>

</style>