var button = document.getElementById('button')
var block = document.getElementById('block')
var text_zapiska = document.getElementById('text_zapiska')

dataChange()

text_zapiska.addEventListener( "input", dataChange)
function dataChange(){
    var zapiska = text_zapiska.value
    zapiska_cubik = zapiska;
}

var zapiska_cubik

function addCubic(){
    if(text_zapiska.value != "") {
        let close = document.createElement("div")
        close.addEventListener("click", remove)
        var cubic = document.createElement("div")
        close.innerHTML = 'X'
        close.classList.add("close")
        cubic.style.background = "red"
        cubic.classList.add("cubic")
        cubic.innerHTML = text_zapiska.value
        cubic.addEventListener("click", function (e){
            cubic.style.background = "green"
        })
        let text = text_zapiska.value
        cubic.appendChild(close)
        block.appendChild(cubic)
    }
}

button.addEventListener("click", function (){
    addCubic()
    text_zapiska.value = ''
})

function remove (e) {
    e.target.parentElement.remove()
}
