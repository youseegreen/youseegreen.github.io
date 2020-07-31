//最初の掲載日、最終更新日のせるように
//タグでわけるやつやりたい


<template>
	<v-container>

		<v-layout row mt-3 mb-5>
			<v-flex>
				<h1 class="display-1">その他</h1>
			</v-flex>
		</v-layout>

		<v-layout ml-3 mb-5 wrap>
			<v-flex>
				<p class="title">技術系Tipsやちょっとしたメモなどを載せているページです。</p>
				<p class="title">記事について質問やコメント等あれば、メールや<a href='https://twitter.com/you_see_green' style="color:#000; text-decoration:none;" target="_blank">Twitter</a>等でご連絡ください。</p>
			</v-flex>
		</v-layout>

		<v-flex v-for="item in items" :key="item.title">

			<v-layout v-if="item.BOOL == 'True'" ml-3 mb-5 wrap>
		<!--	<v-layout ml-3 mb-5 wrap>   -->
				<v-flex xs-12 sm-12 md-12 lg-12 lx-12>
				<v-card>
					<v-flex ml-3 mt-3 mb-3 mr-3>
						<h2 class="headline font-weight-bold mb-1">
						<router-link class='tip-title-txt':to="'/Others' + item.URL">{{item.title}}
						</router-link></h2>
						<p class="subtitle-1 mb-3">{{item.keywords}}</p>
						<p class="body-1">{{item.abstract}}</p>
					</v-flex>
				</v-card>
				</v-flex>
			</v-layout>
		</v-flex>
		
	</v-container>
</template>


<style>
.tip-title-txt{
  font-family: SegoeUI,Helvetica,sans-serif;
  color:#007641;
  text-decoration: none;
}
</style>


<script>
import others from '../assets/data/others/others.json'
export default {
	name: 'other',
	data() {
		return {
			items: others
		}
	},
};
</script>
