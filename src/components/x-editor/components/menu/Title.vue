<template>
    <div class="x-editor-menu x-editor-title__box">
        <div class="title__box x-editor-menu__item">
            <div class="x-editor-menu__item__text" @click.stop="menuTitleClick">
                <button>{{ title }}</button>
                <span class="iconfont icon-xiala"></span>
            </div>
            <div class="drop-down__box" v-if="dropDownShow">
                <div class="drop-down-list__box">
                    <ul role="menuitem">
                        <template v-for="(item,index) in titleList">
                            <li  :key="index" @click.stop="titleItemClick(item,index)">
                                <div class="item-check__box">
                                    <span class="iconfont icon-duihao" v-if="activeTitle===index"></span>
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
            titleList: titleList,
            dropDownShow: false,
            activeTitle: 0,
            title: "正文",
        }
    },
    methods: {
        menuTitleClick() {
            this.dropDownShow = !this.dropDownShow
        },
        titleItemClick(item, index) {
            this.activeTitle = index
            this.dropDownShow = false;
            this.title = item.label;
            this.$emit("title-click", item)
        }
    }
}
</script>

<style lang="scss" scoped>
//@import "../../assets/css/common";

.x-editor-title__box {
    color: #595959;

    .title__box {
        height: 100%;
    }
}

.x-editor-menu__item__text {
    span {
        cursor: pointer;

        &:nth-child(1) {
            width: 40px;
            text-align: left;
            font-size: 12px;
            font-weight: bold
        }
    }

    .icon-xiala {
        font-size: 12px;
        color: rgb(138, 138, 138);
    }
}

</style>