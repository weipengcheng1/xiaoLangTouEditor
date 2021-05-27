<template>
		<div class="x-editor-menu x-editor-title__box">
				<div class="title__box x-editor-menu__item">
						<span>正文</span>
						<div class="drop-down__box">
								<div class="drop-down-list__box">
										<ul>
												<template v-for="(item,index) in titleList">
														<li :key="index">
																<div class="item-check__box">
																		<span></span>
																</div>
																<div class="item-li__box" v-html="item.elem"></div>
														</li>
												</template>
										</ul>
								</div>
						</div>
				</div>
		</div>
</template>

<script>
import {titleList} from "../../util/menuComm";

export default {
		name: "Title",
		data() {
				return {
						titleList: titleList
				}
		}
}
</script>

<style lang="scss" scoped>
@import "../../css/common";
.x-editor-title__box{
		.title__box{
				height: 100%;
		}
}

</style>