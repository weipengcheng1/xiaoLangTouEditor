<template>
		<div v-if="component" :is="component" :obj="obj">

		</div>
</template>

<script>
import Vue from "vue";

export default {
		name: "remote-component-loader",
		props: {
				obj: {
						type: Object,
						default: () => {
								return {}
						}
				},
				config: {
						type: Object,
						default: () => {
								return {}
						}
				}
		},
		data() {
				return {
						component: "",
						data: {}
				}
		},
		watch: {
				"config.name"() {
						this.component = Vue.extend(window[this.config.name].Component)
				}
		},
		created() {
				//动态添加组件，用于可视化编辑场景
				const {name, js, css, index} = this.config;

				const component = window[name];

         				if (!component) {
						//先通过原生操作创建script标签和link标签
						const script = document.createElement("script");
						const link = document.createElement("link");
						//将js挂载到script标签，css挂载到link标签
						script.src = js;
						link.href = css;
						link.rel = "stylesheet"
						//动态将script和link标签挂载都head中
						document.appendChild(link);
						document.appendChild(script)
						//script挂载完成后
						script.onload = () => {
								this.$emit("onRemoteComponentLoad", {...window[name], index})
						}
						this.component = Vue.extend(window[name].Component)
				} else {
						//非动态添加
						this.$emit("onRemoteComponentLoad", {...window[name], index})
						//先有props在挂组件，不然props是null
						this.$nextTick(() => {
								this.component = Vue.extend(window[name].Component)
						})
				}
		},
		methods: {}
}
</script>

<style scoped>

</style>