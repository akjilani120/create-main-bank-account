document.getElementById('deposit-button').addEventListener("click", function(){
    //  deposit money
    // deposit input
    const depoInput=document.getElementById("deposit-input");   
    const depoMainInput=depoInput.value;
    const changedepoMainInput=parseFloat(depoMainInput);  
    // deposit  balance  
    const depositMoney=document.getElementById("deposit-money");
    const changedepositMoney=depositMoney.innerText;   
    const changedepositMoneyMain=parseFloat(changedepositMoney) 
    const totaldepositeMoney= changedepoMainInput + changedepositMoneyMain;
    depositMoney.innerText=totaldepositeMoney;
    depoInput.value= ' ';

    // deposite to main total balance;
    const mainTotal=document.getElementById("main-balance")
    const convertMainTotal=parseFloat(mainTotal.innerText)
    const totalMainAddBalance= convertMainTotal + changedepoMainInput ;
    mainTotal.innerText=totalMainAddBalance;
})

document.getElementById('withdraw-button').addEventListener("click", function(){
   const withdrawMain=document.getElementById("withdrow-balance")
  
   const convetWithdrow= parseFloat(withdrawMain.innerText);
   
   const withdrawInput=document.getElementById("withdraw-input")
   const convetwinthdrawInput=parseFloat( withdrawInput.value)
   const convetwithdrowtotal= convetWithdrow + convetwinthdrawInput
   withdrawMain.innerText=convetwithdrowtotal
   withdrawInput.value=" ";
  //   withdraw main balance
   const mainTotal=document.getElementById("main-balance")
   const convertMainTotal=parseFloat(mainTotal.innerText)
   const lossMoney=   convertMainTotal - convetwinthdrawInput
   mainTotal.innerText=lossMoney;

})

