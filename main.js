// // window.alert("WHAT IS YOUR NAME?")
document.getElementById("companyName").innerHTML="&copy Ansar Allah Rwanda ";

document.getElementById('search').onclick=function () {
    let item=document.getElementById('searchfield').value;
    item=String(item);
    document.getElementById('items').innerHTML="You've searched for: "+item;
}
////////////////////////
let a,b,c;

document.getElementById('SubmitButton').onclick=function (){
    

    a=document.getElementById("aTextbox").value;
    a=Number(a);

    b=document.getElementById("bTextbox").value;
    b=Number(b);
    c=a+b;
    // c= Math.pow(a,2)+Math.pow(b,2);
    // console.log(c);
    document.getElementById('clabel').innerHTML='Side C:'+c;
}
////////////////////////
let count=0;
document.getElementById('decreaBtn').onclick=function(){
    count =count-1;
    document.getElementById('countLabel').innerHTML=count;
}
document.getElementById('resetBtn').onclick=function(){
    count =0;
    document.getElementById('countLabel').innerHTML=count;
}
document.getElementById('increaseBtn').onclick=function(){
    count +=1;
    document.getElementById('countLabel').innerHTML=count;
}
/////////////////////////
let x = Math.floor(Math.random() * 6)+1;

// document.getElementById("pos").innerHTML=x;
// console.log(x);

////////////////////////


let userName="Zain Dusabe";
let phoneNumber="780-314-784";
document.getElementById("pos").innerHTML=userName.toUpperCase();
document.getElementById("pos1").innerHTML=userName.toLowerCase();
document.getElementById("pos2").innerHTML=phoneNumber.replaceAll("-","_");

let firstName= userName.slice(5);
let lastName
console.log(lastName=userName.slice(0,4));
console.log(firstName);
// 8632
let letter=userName.charAt(1)
letter = letter.toUpperCase();
console.log(`Hello ${userName} "s"`);


/////////////////////////



document.getElementById("mybutton").onclick= function(){
   const mycheckbox=document.getElementById("myCheckBox");
   const visabtn1=document.getElementById("visabtn");
   const paypalbtn1=document.getElementById("paypalbtn");
   
    if(mycheckbox.checked){
        message=`Dear ${firstName} you've successfull subscribed`;
        document.getElementById("items").innerHTML=message;

    }
    else{
        message=`Dear ${firstName} you've not subscribed`;
        document.getElementById("items").innerHTML=message;
    }


    if(paypalbtn1.checked){
        message=`Dear ${firstName} you've choosed Paypal`;
        document.getElementById("item").innerHTML=message;
    }
    else if(visabtn1.checket){
        message=`Dear ${firstName} you've choosed Visa Card`;
        document.getElementById("item").innerHTML=message;
    }
    
    
    
    
    else{
        message=`Dear ${firstName} choose between Visa and Paypal`;
        document.getElementById("item").innerHTML=message;
    }
}


document.getElementById("Check").onclick= function(){
    let gradecheck=document.getElementById("grade").value;
    gradecheck=String(gradecheck)
    switch (gradecheck) {
        case "A":
            message="Did great !!";
            document.getElementById("gradechek").innerHTML=message
            
            break;
        case "B":
            message="Did good !!";  
            document.getElementById("gradechek").innerHTML=message

        break;
        case "C":
            message="Did well !!";
            document.getElementById("gradechek").innerHTML=message

            break;
        default:
            message=`Wanditse :(  ${gradecheck} ) shyiramo inyuguti wabonye ku isomo !!`;
            document.getElementById("gradechek").innerHTML=message

            break;
    }
}