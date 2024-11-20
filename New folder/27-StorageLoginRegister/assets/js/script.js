
// document.addEventListener("DOMContentLoaded", ()=>{
//     let users = JSON.parse(localStorage.getItem("users"));
    
//     let exit = document.querySelector(".exit");
//     let edit = document.querySelector(".edit");
//     let name = document.querySelector("#name");
//     let surname = document.querySelector("#surname");
//     let email = document.querySelector("#email");
//     let password = document.querySelector("#password");
//     let password2 = document.querySelector("#password2");
//     let form = document.querySelector(".form");
//     exit.addEventListener("click", ()=>{
//         localStorage.removeItem("loggedInUser")
//         setTimeout(() => {
//             window.location.href= "login.html"
//         }, 1000);
//     })
   
    
    
//     edit.addEventListener("click", () => {
//        setTimeout(()=>{
//         window.location.href='edit.html'
//        })
//     });


//                 function toast(message) {
//                     Toastify({
//                         text: message,
//                         duration: 2000,
//                         gravity: "top",
//                         position: "left",
//                         style: {
//                             background: "linear-gradient(to right, #00b09b, #96c93d)"
//                         },
//                     }).showToast();
//                 }
// })



document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Daxil olan istifadəçi

    let exit = document.querySelector(".exit");
    let edit = document.querySelector(".edit");
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    let form = document.querySelector(".form");
    let loginBtn = document.querySelector(".login-btn");
    let logRegDiv = document.querySelector(".log-reg");
    let usernameDisplay = document.querySelector("#usernameDisplay");

    // İstifadəçi daxil olubsa, navigasiya panelini dəyişdiririk
    if (loggedInUser) {
      
        usernameDisplay.style.display = "inline"; // İstifadəçi adını göstəririk
        usernameDisplay.textContent = loggedInUser.username; // İstifadəçi adını buraya əlavə edirik
    }

    // Çıxış etmək
    exit.addEventListener("click", () => {
        
        localStorage.removeItem("loggedInUser");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });

    // Redaktə səhifəsinə yönləndirmək
    edit.addEventListener("click", () => {
       
        
        setTimeout(() => {
            window.location.href = 'edit.html';
        });
    });

    function toast(message) {
        Toastify({
            text: message,
            duration: 2000,
            gravity: "top",
            position: "left",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)"
            },
        }).showToast();
    }
});
