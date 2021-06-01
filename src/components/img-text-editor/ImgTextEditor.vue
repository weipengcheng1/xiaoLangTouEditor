<template>
    <div class="container">
        <div class="style_box">
            <div class="fieldset__box" @click="clickItem($event)">
                <fieldset style="border: none;margin: 0.8em 5% 0.3em;">
                    <section class="_135editor" draggable="true" data-tools="135编辑器" data-id="104311">
                        <section style="margin: 10px auto;text-align: center;">
                            <section style="background-color: #f7f9f7;padding: 30px 0;">
                                <section
                                        style="background: url(https://135editor.cdn.bcebos.com/files/images/editor_styles/86712c61ba9a09d398eb534f2439a0f5.png) no-repeat bottom left;background-size: 54%;">
                                    <section style="display: flex;justify-content: space-evenly;align-items: center;">
                                        <section style="box-sizing:border-box;width: 40%;">
                                            <section style="display: inline-block;">
                                                <section class="135brush" data-brushtype="text"
                                                         style="font-size: 16px;letter-spacing: 1.5px;color: #438f84;padding: 0 10px;">
                                                    <strong>1、挂艾草</strong></section>
                                                <section class="assistant"
                                                         style="box-sizing:border-box;width: 100%;height: 9px;background-color: #f7ecd4;margin: -5px 0 15px 0;"></section>
                                            </section>
                                            <section data-autoskip="1" class="135brush"
                                                     style="text-align: justify;line-height:1.75em;letter-spacing: 1.5px;font-size:14px;color:#333;background: transparent;">
                                                <p>《 ”未吃端午粽，寒衣不可送；吃了端午粽，还要冻三冻“</p></section>
                                        </section>
                                        <section style="box-sizing:border-box;width: 40%;">
                                            <section style="box-sizing:border-box;width: 100%;">
                                                <img style="box-sizing:border-box;width: 100%; display: block;"
                                                     src="https://135editor.cdn.bcebos.com/files/images/editor_styles/d3b9bf1c600c31bc0d03849b74d5abf1.jpg"
                                                     data-ratio="1.4734513274336283" data-w="226">
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </fieldset>
            </div>
        </div>
        <div class="editor__box">
            <script id="editor" type="text/plain"></script>
        </div>
    </div>
</template>

<script>

export default {
    name: "ImgTextEditor",
    data() {
        return {
            editor: null,
            config: {
                initialFrameWidth: null,
                initialFrameHeight: 1000,
                allowDivTransToP: false,
                autoHeightEnabled: false,
                imageUrlPrefix: "https://zgfujian.cn",
                imagePathFormat: "/uploads/art/images/{yyyy}{mm}{dd}/{time}{rand:6}",
                focus: true
            },
            contentValue: "<br /><p style='color: #333333;font-size: 14px'>从这里开始写正文</p>"
        }
    },
    mounted() {
        window.UE.delEditor('editor');
        const _this = this;
        this.editor = window.UE.getEditor('editor', _this.config);
        this.editor.addListener("ready", function () {
            setTimeout(() => {
                _this.editor.setContent(_this.contentValue); // 确保UE加载完成后，放入内容。
            }, 500)
            _this.editor.execCommand("insertHtml", "<p>我是新添加的内容</p><br/>")
        });
        document.getElementById("ok").onclick=function (){
            alert("ok")
        }
    },
    methods: {
        clickItem($event) {
            this.editor.execCommand("insertHtml", `<section>${$event.currentTarget.innerHTML}</section><br />`)
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
}

.style_box {
    flex: 0.5;

    .fieldset__box {
        width: 310px;
        height: auto;
    }
}

.editor__box {
    flex: 1;
    height: 100vh;
}
</style>