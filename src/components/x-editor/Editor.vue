<template>
    <div class="x-editor-container">
        <div class="x-editor__box">
            <div style="position: relative;z-index: 99999">
                <div class="x-editor-header__box">
                    <div class="x-editor-menu__box">
                        <!--	菜单列表-->
                        <Title @title-click="titleClick"></Title>
                    </div>
                </div>
            </div>
            <div class="x-editor-body__box">
                <!--主体-->
                <div class="x-editor-wrap__box">
                    <div class="x-editor-wrap-content__box">
                        <div class="x-editor-outer__box">
                            <div class="x-editor-outer-content__box">
                                <div id="editor" class="x-editor_engine x-editor-content_input__box"
                                     contenteditable="true" spellcheck="false" @keydown.enter="keydowEnter">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from "./components/menu/Title";
import {crateExecCommand} from "./util/funcCommon";

export default {
    name: "Editor",
    components: {Title},
    data() {
        return {
            nodeId: 'editor'
        }
    },
    mounted() {
        crateExecCommand('editor', "p")
    },
    methods: {
        // 标题菜单点击事件
        titleClick(titleItem) {
            //菜单被
            //先要知道光标聚焦的位置
            //点击完后要做的事，
            // 1、创建一个对应标题的标签
            //2、标签聚焦

            this.nodeId = crateExecCommand(this.nodeId, titleItem.value)
        },
        keydowEnter() {
            console.log(document.getSelection())
            crateExecCommand("editor", "p")
        }
    }
}
</script>

<style lang="scss">
@import "./assets/css/iconfont.css";
@import "./assets/css/common";

.x-editor-container {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;

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
        background-color: #FCFCFC;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 3;
    }

    .x-editor-menu__box {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .x-editor-body__box {
        width: 100%;
        height: calc(100% - 40px);

    }

    .x-editor-wrap__box {
        display: flex;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding-top: 16px;

        &:before {
            content: " ";
            flex: 1;
            display: block;
        }

        &:after {
            content: " ";
            flex: 1;
            display: block;
            min-width: 282px;
        }
    }

    .x-editor-wrap-content__box {
        margin: 0 16px;
    }

    .x-editor-outer__box {
        width: 872px;
        padding-bottom: 1px;
    }

    .x-editor-outer-content__box {
        border: 1px solid #e8e8e8;
        box-shadow: 0 2px 8px rgba(115, 115, 115, 0.08);
        background-color: #fff;
        margin-bottom: 64px;
        height: 100%;
    }

    .x-editor-content_input__box {
        min-height: 1024px;
        padding: 20px 60px 90px 60px;
    }
}
</style>