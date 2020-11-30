var button = document.querySelector(".section-btn");
var textarea = document.querySelector(".textarea");
var output = document.querySelector(".output");


function error(){
    alert("yup we are sorry!! try after an hour")
}

function btnclick(){
fetch(`https://api.funtranslations.com/translate/minion.json?text=${textarea.value}`)
.then(response=>response.json())
.then(value=>{
    output.innerText=value.contents.translated
})
.catch(error)
}
button.addEventListener("click", btnclick)






