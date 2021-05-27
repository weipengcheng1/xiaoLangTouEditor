<template>
		<div class="x-editor-container">
				<div class="x-editor__box">
						<div class="x-editor-header__box">
								<div class="x-editor-menu__box">
										<!--	菜单列表-->
										<Title ></Title>
								</div>
						</div>
				</div>
		</div>
</template>

<script>
import Title from "./components/menu/Title";

export default {
		name: "Editor",
		components: {Title}
}
</script>

<style lang="scss" scoped>
.x-editor-container {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;

		.x-editor__box {
				width: 100%;
				height: 100%;
				background-color: #fafafa;
		}

		.x-editor-header__box {
				width: 100%;
				height: 40px;
				border-top: 1px solid #E9E9E9;
				border-bottom: 1px solid #E9E9E9;
				background-color: #fff;
				display: flex;
				justify-content: center;
		}
		.x-editor-menu__box{
				display: flex;
				align-items:center;
				height: 100%;
		}
}
</style>