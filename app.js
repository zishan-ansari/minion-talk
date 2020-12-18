var btn=document.querySelector("#btn-translate");
var txt=document.querySelector("#txt-input");
var output=document.querySelector("#output");
//console.log(output);//

//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var url="https://api.funtranslations.com/translate/minion.json";

function getTranslationurl(text){
    return url +"?" +"text="+text

   
}
function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server! try again after some")
}
function ClickedEventHandler(){
    var inputText=txt.value;

    fetch(getTranslationurl(inputText))
    .then(response=>response.json())
    .then(json=>
        {
            var translatedtext=json.contents.translated;
            output.innerText=translatedtext;

        })
    .catch(errorHandler)
    
};
btn.addEventListener("click",ClickedEventHandler);
