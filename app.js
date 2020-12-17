var btn=document.querySelector("#btn-translate");
var txt=document.querySelector("#txt-input");
var output=document.querySelector("#output");
console.log(output);
function ClickedEventHandler(){
    output.innerText="sshhhhh "+txt.value
    
}
btn.addEventListener("click",ClickedEventHandler);
