<template>
	<v-container style="width:100%">


		<v-layout>
			<v-flex mt-3 mb-5>
				<h1 class="display-1">プロジェクト</h1>
			</v-flex>
		</v-layout>


		<v-flex v-for="item in items" :key="item.title">
			<v-layout mb-5 ml-3>
			<v-card>
			<v-layout row mt-3 mb-2 mr-2 ml-3 wrap>
				<!-- offset：offset-md1 offset-xl1) -->
				<v-flex xs11 sm11 md4 xl4 mr-5>
					<v-img :src="require('../assets/images/' + item.photoPass)" contain></v-img>
				</v-flex>
				<v-flex xs11 sm11 md7 xl7>
					<h2 class="headline font-weight-bold mb-1">{{item.title}}</h2>
					<p class="subtitle-1 mb-3">{{item.publication}}</p>
					<p class="body-1">{{item.abstract}}</p>
				</v-flex>
			</v-layout>
			</v-card>
			</v-layout>
		</v-flex>
	</v-container>
</template>

<script>
import projects from '../assets/data/projects/projects.json'
export default {
	name: 'project',
	data() {
		return {
			items: projects
		}
	},
};
</script>

<style>
</style>