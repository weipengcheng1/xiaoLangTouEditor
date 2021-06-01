import Vue from 'vue'
import App from './App.vue'

// import "../public/static/ueditor/ueditor.config"
// import "../public/static/ueditor/ueditor.all"
// import "../public/static/ueditor/lang/zh-cn/zh-cn"
// import "../public/static/ueditor/ueditor.parse.min"
// import "../public/static/ueditor/themes/default/css/ueditor.css"
// import "../public/static/ueditor/addButton"

Vue.config.productionTip = false

function getComponents() {
    const componentsConfig = [];
    const requireConfig = require.context(
        "./components",
        true,
        /package.json$/
    )
    requireConfig.keys().forEach(fileName => {
        const config = requireConfig(fileName);
        componentsConfig.push(config)

    })
    console.log(componentsConfig)
    return componentsConfig
}
new Vue({
    render: h => h(App),
}).$mount('#app')
