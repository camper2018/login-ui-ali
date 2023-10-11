
 // code to show alert on form submission
 let submitBtn = document.querySelector('button');
 submitBtn.addEventListener('click', (e) => {
     const form = document.getElementById('login');
     let  username = form.elements['username'].value;
     let password = form.elements['password'].value;
     if (username && password.length >= 8 ) {
        var body = document.querySelector("body");
        body.style.margin = "0px";
        body.innerHTML = `<div class='home-page'></div>
                          <div class="home-text">
                            <h2>Hello President ${username}!</h2>
                            <h1 style="font-size:50px">Welcome to the United States Government Database!</h1>
                          </div>`;
                          

      
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
