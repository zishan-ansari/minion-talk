var btn=document.querySelector("#btn-translate");
var txt=document.querySelector("#txt-input");

function ClickedEventHandler(){
    console.log("Clicked!");
    console.log("input",txt.value);
}
btn.addEventListener("click",ClickedEventHandler);
