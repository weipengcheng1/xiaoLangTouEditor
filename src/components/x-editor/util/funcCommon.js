export const crateExecCommand = (elementId = "", labelName = "") => {
    //创建
    let mainElement=document.getElementById(elementId)
    let label= document.createElement(labelName)
    label.setAttribute("contenteditable","true")
    mainElement.appendChild(label)

    // if (elementId && labelName) {
    //     document.getElementById(elementId).focus()
    //     document.execCommand("formatBlock", false, labelName);
    // }
    // let node = document.getSelection().focusNode;
    // console.log(node)
    // //判断
    // if (node.getAttribute('id') === "editor") return
    // node.setAttribute("id", nodeId)

    //保存最后创建元素的id
    return generateRandom()
}


export const getNodeAttribute = () => {
    let selection = document.getSelection();
    let range = selection.getRangeAt(0)
    console.log(range.endContainer)
}

//生成随机id
function generateRandom() {
    let arr = [];
    for (let i = 48; i < 123; i++) {
        if (i > 57 && i < 65) continue;
        if (i > 90 && i < 97) continue;
        arr.push(String.fromCharCode(i));
    }
    arr.sort(function () {
        return Math.random() - 0.5;
    });
    arr.length = 4;
    return arr.join("") + new Date().getTime()
}

