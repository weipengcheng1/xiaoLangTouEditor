<template>
		<div id="app">
				<editor></editor>
		</div>
</template>

<script>


import Editor from "./components/x-editor/Editor";

export default {
		name: 'App',
		components: {Editor}
}
</script>

<style>
* {
		margin: 0;
		padding: 0;
}

#app {
		font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
    /*background-color: #fafafa;*/
}
</style>
