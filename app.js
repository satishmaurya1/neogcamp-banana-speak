var button = document.querySelector(".btn");
var textarea = document.querySelector(".textarea");
var output = document.querySelector(".output");

var link = 	"https://api.funtranslations.com/translate/minion.json";

function makeUrl(text){
    return link + "?" + "text=" + text
}

function Error(){
    alert("server not found")
}


function btnClick(){
    var textValue = textarea.value
    fetch(makeUrl(textValue))
    .then(response=>response.json())
    .then(value=>{
        var outputText=value.contents.translated
        output.innerText = outputText
        console.log(value.contents.translated)
    })
    .catch(Error)

}

button.addEventListener("click", btnClick)



