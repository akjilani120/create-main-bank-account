function getInput(inputId){
    const InputField=document.getElementById(inputId);   
    const MainInputValue=InputField.value;
    const mainInput=parseFloat(MainInputValue);  
    InputField.value= ' ';

    return  mainInput;
}
function getText(textAdd, amount){
  
    const moneyTextadd=document.getElementById(textAdd);
    const mainMoneyTextAdd=moneyTextadd.innerText;   
    const moneyText=parseFloat(mainMoneyTextAdd) 
    const totalMoneyText= amount + moneyText;
    moneyTextadd.innerText=totalMoneyText;
  
}
function getTotalBalance(){
    const mainTotal=document.getElementById("main-balance")
    const convertMainTotal=parseFloat(mainTotal.innerText)
    return convertMainTotal;
}
function totalBalance(inputAdded, isAdd){
   const convertMainTotal= getTotalBalance()
    const mainTotal=document.getElementById("main-balance")   
    
   if(isAdd==true){
    mainTotal.innerText= convertMainTotal + inputAdded ;
   }else{
    mainTotal.innerText= convertMainTotal- inputAdded ;
   }
}
document.getElementById('deposit-button').addEventListener("click", function(){
    //  deposit money
    // deposit input
    // const depoInput=document.getElementById("deposit-input");   
    // const depoMainInput=depoInput.value;
    // const changedepoMainInput=parseFloat(depoMainInput);  
    // deposit  balance  
   
    // const depositMoney=document.getElementById("deposit-money");
    // const changedepositMoney=depositMoney.innerText;   
    // const changedepositMoneyMain=parseFloat(changedepositMoney) 
    // const totaldepositeMoney= changedepoMainInput + changedepositMoneyMain;
    // depositMoney.innerText=totaldepositeMoney;
    // depoInput.value= ' ';
    
    // deposite to main total balance;
    // const mainTotal=document.getElementById("main-balance")
    // const convertMainTotal=parseFloat(mainTotal.innerText)
    // const totalMainAddBalance= convertMainTotal + changedepoMainInput ;
    // mainTotal.innerText=totalMainAddBalance;
    const changedepoMainInput=getInput("deposit-input");
   
    
    if(changedepoMainInput > 0 ){
        getText("deposit-money", changedepoMainInput );
        totalBalance(changedepoMainInput, true);
    }
    else{
        alert("Please give positive Number")
    }

})

document.getElementById('withdraw-button').addEventListener("click", function(){
//    const withdrawMain=document.getElementById("withdrow-balance")  
//    const convetWithdrow= parseFloat(withdrawMain.innerText);
   
//    const withdrawInput=document.getElementById("withdraw-input")
//    const convetwinthdrawInput=parseFloat( withdrawInput.value)
   
//    const convetwithdrowtotal= convetWithdrow + convetwinthdrawInput
//    withdrawMain.innerText=convetwithdrowtotal
  
   
  //   withdraw main balance
//    const mainTotal=document.getElementById("main-balance")
//    const convertMainTotal=parseFloat(mainTotal.innerText)
//    const lossMoney=   convertMainTotal - convetwinthdrawInput
//    mainTotal.innerText=lossMoney;
const convetwinthdrawInput=getInput("withdraw-input")
const withdrowTotalBalance= getTotalBalance()
if(convetwinthdrawInput > 0 &&  convetwinthdrawInput < withdrowTotalBalance ){
    getText("withdrow-balance", convetwinthdrawInput)
    totalBalance(convetwinthdrawInput, false)
}else{
alert("You have not suficinent balance" )}
})

