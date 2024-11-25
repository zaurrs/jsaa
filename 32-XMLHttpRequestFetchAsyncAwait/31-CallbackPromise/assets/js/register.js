    document.addEventListener("DOMContentLoaded", ()=>{
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let form = document.querySelector(".form")
        let name = document.querySelector("#name")
        let surname = document.querySelector("#surname")
        let username = document.querySelector("#username")
        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
        let passwordReply = document.querySelector("#passwordReply")
        let submit = document.querySelector(".btnn")
        let isLogined = false    

    function validateUsername(username) {
        const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
        if (!usernamePattern.test(username)) {
            return "İstifadəçi adı 3 ilə 20 simvol arasında olmalı və yalnız əlifba, rəqəm, alt xətt (_) və tire (-) istifadə edilməlidir.";
        }
        return null;
    }

    function validatePassword(password) {
        const upperCasePattern = /[A-Z]/;  // Böyük hərf
        const lowerCasePattern = /[a-z]/;  // Kiçik hərf
        const numberPattern = /\d/;        // Rəqəm
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;  // Xüsusi simvol

      
        if (password.length < 8) {
            return "Şifrə ən azı 8 simvol olmalıdır.";
        }
        if (!upperCasePattern.test(password)) {
            return "Şifrənizdə ən azı bir böyük hərf olmalıdır.";
        }
        if (!lowerCasePattern.test(password)) {
            return "Şifrənizdə ən azı bir kiçik hərf olmalıdır.";
        }
        if (!numberPattern.test(password)) {
            return "Şifrənizdə ən azı bir rəqəm olmalıdır.";
        }
        if (!specialCharPattern.test(password)) {
            return "Şifrənizdə ən azı bir xüsusi simvol (məsələn, @, #, $, %, &) olmalıdır.";
        }

        return null; 
    }
    
    function checkPassword() {
        let icon = document.querySelector(".iconn");
        let passwordError = validatePassword(password.value);
        if (passwordError) {
            icon.style.color = "red";  
            toast(passwordError);
        } else {
            icon.style.color = "green";  
        }
    }
   
        function register(e){
            e.preventDefault()
            if (password.value !== passwordReply.value) {
                toast("Şifrələr uyğun gəlmir");
                return;
            }
        
        let userUnique = users.some((user)=> user.username === username.value || user.email===email.value)
            if(!userUnique){
                let newUser ={
                    name: name.value,
                    surname:surname.value,
                    email:email.value,
                    username:username.value,
                    password:password.value,
                    passwordReply:passwordReply.value,
                    id:uuidv4(),
                    isLogined : isLogined,
                    wishList:[],
                    basket:[]
                }
                users.push(newUser)
                localStorage.setItem("users", JSON.stringify(users))
                toast("register succesfuuly");
                setTimeout(()=>{
                    window.location.href="login.html"
                }, 2000)
            }
            else{
                toast("already exsits")
                // return
            }


            }
        

        function toast(mesage){
            Toastify({
    text:mesage,
                duration: 2000,
                gravity: "top", 
                position: "left", 
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)"
                },
            }).showToast();
        }
        form.addEventListener("submit", register)
        password.addEventListener("input", checkPassword);
    })

        
