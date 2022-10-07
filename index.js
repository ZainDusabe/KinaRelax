 //Number Guessing game
//  name=window.prompt("Enter your name please ?");
//  document.getElementById("tit").innerHTML=name;
document.getElementById("companyName").innerHTML="&copy KinaRelax ";

const answer = Math.floor(Math.random() *10+1);
let guess = 0;
document.getElementById("submitButton").onclick=function(){
let gues=document.getElementById("guesField").value;
  guess +=1;

  function ld(){
    document.getElementById("submitButton").onclick=function(){
      window.location.reload();
  }
  }
  if(isNaN(gues)|| guess<1||gues>10){
    document.getElementById("alert").innerHTML="Fill only number between 1-10";
    ld();
  }
  else if(gues==""){
    document.getElementById("alert").innerHTML="Fiil number please";
    ld();
  }
  else if(gues == answer){
    message=`You won!! ${answer} is  corect.`;
    document.getElementById("alert").innerHTML=message;
    document.getElementById("aler1").innerHTML=` It took you ${guess} guesses only`;
    ld();

  
  }
  else if(gues<answer){
    message="Too small";
    document.getElementById("alert").innerHTML=message;

  }else{
    message="too large!";
    document.getElementById("alert").innerHTML=message;

  }
for(let i=0;i<=guess;i++){
  document.getElementById("ale").innerHTML=`${i} times`;
  if(i===3){
    document.getElementById("aler").innerHTML=
    "You left 1 tries";
  }
}
  if(guess==3){
    message=`You exeed ${guess} guesses !!! try again `;
    document.getElementById("alert").innerHTML=message;
    ld();

}}
