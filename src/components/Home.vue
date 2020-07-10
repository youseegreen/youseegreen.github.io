<template>

	<v-container style="width:70%">
		<v-layout text-xs-center wrap class="home-hero__content" mb-5>
			<v-flex xs12 mt-5 mb-5>
				<h1 class="display-2 font-weight-bold mt-3 mb-3" style="color:#007641;">Welcome to Yushi's HP!</h1>
			</v-flex>
		</v-layout>

		<v-layout text-xs-left wrap ml-2 mb-5>	
			<v-flex>
				<h1 class="display-0 font-weight-bold mb-2">News</h1>
				<v-divider class="mb-3"></v-divider>
		
				<v-layout text-xs-left mb-2 ml-4 wrap>
					<v-flex xs2 sm2 md2 xl2>
						<p class="title font-weight-regular">
						2020.3.25
						</p>
					</v-flex>
					<v-flex>
						<p class="title font-weight-regular">
						<a class='news-link' href='https://www.iscie.or.jp/about/award' target='_blank'>システム制御情報学会</a>より2020年度学会賞「奨励賞」を受賞しました。
						</p>
					</v-flex>
				</v-layout>

				<v-layout text-xs-left mb-2 ml-4 wrap>
					<v-flex xs2 sm2 md2 xl2>
						<p class="title font-weight-regular">
						2019.8.24-9.7
						</p>
					</v-flex>
					<v-flex>
						<p class="title font-weight-regular">
						<a class='news-link' href='https://www.huawei.com/jp/sustainability/csr-news/hw_20190912' target='_blank'>HUAWEI Seeds for the Futureプログラム</a>に参加しました。
						</p>
					</v-flex>
				</v-layout>

				<v-layout text-xs-left mb-2 ml-4 wrap>
					<v-flex xs2 sm2 md2 xl2>
						<p class="title font-weight-regular">
						2019.5.24
						</p>
					</v-flex>
					<v-flex>
						<p class="title font-weight-regular">
						<a class='news-link' href='https://sci19.iscie.or.jp/award/' target='_blank'>第63回システム制御情報学会研究発表講演会</a>にて学生発表賞を受賞しました。
						</p>
					</v-flex>
				</v-layout>

				<v-layout text-xs-left mb-2 ml-4 wrap>
					<v-flex xs2 sm2 md2 xl2>
						<p class="title font-weight-regular">
						2019.4.1
						</p>
					</v-flex>
					<v-flex>
						<p class="title font-weight-regular">
						大阪大学大学院基礎工学研究科 博士前期課程に進学しました。
						</p>
					</v-flex>
				</v-layout>

				<v-layout text-xs-left mb-2 ml-4 wrap>
					<v-flex xs2 sm2 md2 xl2>
						<p class="title font-weight-regular">
						2019.3.3
						</p>
					</v-flex>
					<v-flex>
						<p class="title font-weight-regular">
						<a class='news-link' href='https://www.osaka-u.ac.jp/ja/news/topics/2019/03/1301' target='_blank'>第8回サイエンス・インカレ</a>にてファーウェイ賞を受賞しました。
						</p>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>

		<v-layout text-xs-left wrap ml-2 mb-4>	
			<v-flex>
				<h1 class="display-0 font-weight-bold mb-2">Links</h1>
				<v-divider class="mb-3"></v-divider>

				<p v-for="(eco, i) in link":key="i">
					<a v-bind:href=eco.href class="title font-weight-regular xs12 ml-4" target="_blank" style="color:#007641; text-decoration:none">
					<font-awesome-icon v-bind:icon=eco.icon color="#007641"/>
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
.news-link
{
  color: #007641;
  text-decoration: none;
}
</style>