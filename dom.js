function changeBackground(){
    const body = document.getElementsByTagName("body")[0]
    console.log(body)
    body.style.background = "#fed049";
}

function changeColorClickHandler(){
    changeBackground()
    console.log("Document",document)
    const h1Array = document.getElementsByTagName("h1")
    console.log(h1Array)
    for(let i=0;i<h1Array.length;i++){
        h1Array[i].style.color = "#007580"
    };
    // console.log(h1)
    // h1.style.color = "#007580"
}

const changeFirstTextColorClickHandler = () => {
    changeBackground()
    const firstText = document.getElementById("first-text")
    console.log(firstText)
    firstText.style.color = "red"
}

const changeSecondaryHeadersColorClickHandler = () => {
    changeBackground()
    const secondaryHeaders = document.getElementsByClassName("secondary-headers")
    console.log(secondaryHeaders)
    for(let i=0;i<secondaryHeaders.length;i++){
        secondaryHeaders[i].style.color = "green"
    };
}

const addDivClickHandler = () => {
    const body = document.getElementsByTagName("body")[0]
    const newDiv = document.createElement("div")
    newDiv.innerHTML = "<h4>Im created via DOM manipulation</h4>"
    body.appendChild(newDiv)
}

const printWindowObject = () =>{
    console.log(window)
}

function openAlertBox(){
    window.alert("Im from the browser")
}

function copyText(){
    window.navigator.clipboard = "Copied Text"
}


const parentDivClickHandler = () =>{
    console.log("Im Parent Div")
}
const childDivClickHandler = (event,a,b,c) =>{
    event.stopPropagation()
    console.log(a,b,c)
    console.log("Im Child Div")
}
const pTagClickHandler = (event) =>{
    // event.stopPropagation()
    console.log("Im P Tag ")
}
const buttonClickHandler = (event) =>{
    // event.stopPropagation()
    console.log(event)
    console.log("Im Button")
}



