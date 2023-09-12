 
 // code to show alert on form submission

 let submitBtn = document.querySelector('button');
 submitBtn.addEventListener('click', (e) => {
     const form = document.getElementById('login');
     let  username = form.elements['username'].value;
     let password = form.elements['password'].value;
     if (username && password.length >= 8 ) {
         alert(`Hello President ${username}!\nWelcome to the United States Government Database!`);
     }
     
 });
 
 // code to toggle password visibility

 const showPassword = () => {
     const passwordEl = document.getElementById("password");
 
     if (passwordEl.type === "password") {
         passwordEl.type = "text";
     } else {
         passwordEl.type = "password";
     }
 }
 const checkboxEl = document.getElementById("showPassword");
 checkboxEl.addEventListener("click", showPassword);
