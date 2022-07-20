let chooseUser=document.querySelector(".choose-user");
let chooseCopmuter=document.querySelector(".choose-computer");
let button=document.querySelector("button");
let input=document.querySelector("input");
let wrongText=document.querySelector(".wrong");
let check=false

const arrTools=["rock","paper","scissors"];
let randomTools=Math.floor(Math.random()*arrTools.length);

button.addEventListener("click",choose);
button.addEventListener("click",()=>input.value="");
input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault()
        choose()
        input.value=""
    }
})
function choose(){
    chooseCopmuter.innerHTML=`computer choose is : ${arrTools[randomTools]}`;
    let ComputerValue=arrTools[randomTools];
    let inputValue=input.value.toLowerCase();
    for(let i=0;i<=arrTools.length-1;i++){
   if(arrTools[i].trim()===inputValue.trim()){
    check=true;
    break;
}
else
{
   check=false;
}
    }
   if(check==true){
   chooseUser.innerHTML=`user choose is ${input.value}`;
   if(inputValue==ComputerValue){
    wrongText.innerHTML="it's a tie you can choose again";
   }
   else if(inputValue=="rock"){
  if(ComputerValue=="scissors"){
    wrongText.innerHTML="congratulations you won";
  }
    else{
        wrongText.innerHTML="unfortunatley you lost!"
    }
  }
  else if(inputValue=="paper"){
    if(ComputerValue=="rock"){
        wrongText.innerHTML="congratulations you won";
    }else{
        wrongText.innerHTML="unfortunatley you lost!";
    }
  }
  else if(inputValue=="scissores"){
    if(ComputerValue=="paper"){
        wrongText.innerHTML="congratulations you won";
    }
    else{
        wrongText.innerHTML="unfortunatley you lost!";
    }
  }
   }
   else
   wrongText.innerHTML="this item is wrong please choice another item";
}

