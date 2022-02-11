document.getElementById("login-btn").addEventListener('click' , function(){
   const userField=document.getElementById("user-email");
    const useMainEmail=userField.value;
    const passwordField=document.getElementById("user-password");
    const userMainPassword=passwordField.value;
    if(useMainEmail=="akjilani@gmail.com" && userMainPassword=='634462'){
        window.location.href="bank-page.html";        
    }else{
        alert('Email or password wrong')
    }
})
// const userField=document.getElementById("user-email");
//     const useMainEmail=userField.value;
//     const passwordField=document.getElementById("user-password");
//     const userMainPassword=passwordField.value;
//     if(useMainEmail=="akjilani@gmail.com" && userMainPassword=='634462'){
//         // window.location.href="bank-page.html"
//         console.log("you are success")
//     }
