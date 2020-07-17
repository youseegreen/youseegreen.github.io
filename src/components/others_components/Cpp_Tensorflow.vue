//mdを表示する
//npm install marked raw-loader save-devを実行
//参考https://hiroto-k.hatenablog.com/entry/2019/03/27/200000

<template>
  	<v-container>
		<v-layout mt-3 mb-5>
  			<div v-html="markedContent">
  			</div>
		</v-layout>
  	</v-container>
</template>

<script>
  import marked from 'marked';
  import markDownSource from 'raw-loader!./cpp_tensorflow.md';

  export default {
    computed: {
      source() {
        return markDownSource;
      },
      markedContent() {
        return marked(this.source);
      },
    },
  };
</script>


<style>
</style>