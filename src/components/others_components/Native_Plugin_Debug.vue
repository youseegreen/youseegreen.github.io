
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
  import markDownSource from 'raw-loader!./Native_Plugin_Debug.md';

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