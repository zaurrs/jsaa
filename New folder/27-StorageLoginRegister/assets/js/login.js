// document.addEventListener("DOMContentLoaded", function(){
//     let users = JSON.parse(localStorage.getItem("users"))
//     let form = document.querySelector(".form")
//     let username = this.querySelector("#username")    
//     let password = this.querySelector("#password")    

//     function login (e){
//         e.preventDefault()
//         if(!users){
//             toast("user tapilmadi")
//             return
//         }
//         let findUser = users.find(user => user.username === username.value && user.password === password.value)

//         if(findUser){
//             findUser.isLogined=true
//             localStorage.setItem("users", JSON.stringify(users))
//             toast("ugurlu giris")
//             setTimeout(()=>{
//                 window.location.href="index.html"

//             }, 2000)
//         }else{
//             toast("password or username is incorrect")
//         }
//     }


//     function toast(mesage){
//         Toastify({
//             text:mesage,
//             duration: 2000,
//             gravity: "top", 
//             position: "left", 
//             style: {
//                 background: "linear-gradient(to right, #00b09b, #96c93d)"
//             },
//         }).showToast();
//     }

//     form.addEventListener("submit", login)
// })




// girisi blokla


// document.addEventListener("DOMContentLoaded", function() {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     let form = document.querySelector(".form");
//     let username = document.querySelector("#username");
//     let password = document.querySelector("#password");

//     // Giriş cəhdləri üçün məlumatları localStorage-da saxlamaq
//     let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || {};
//     const MAX_ATTEMPTS = 5;  // Maksimum 5 uğursuz cəhd
//     const LOCK_TIME = 15 * 60 * 1000;  // 15 dəqiqəlik bloklanma (millisaniyə ilə)

//     function login(e) {
//         e.preventDefault();

//         // Bloklanmış hesab yoxlanması
//         let currentUser = users.find(user => user.username === username.value);

//         if (currentUser) {
//             // Hesab bloklanıbsa, girişə icazə vermirik
//             if (loginAttempts[currentUser.username] && loginAttempts[currentUser.username].blockedUntil > Date.now()) {
//                 let blockedTimeRemaining = (loginAttempts[currentUser.username].blockedUntil - Date.now()) / 1000; // saniyə olaraq qalan vaxt
//                 toast(`Hesabınız bloklanıb. ${Math.ceil(blockedTimeRemaining)} saniyə sonra təkrar cəhd edə bilərsiniz.`);
//                 return;
//             }

//             // Şifrəni yoxlamaq
//             if (currentUser.password === password.value) {
//                 currentUser.isLogined = true;
//                 localStorage.setItem("users", JSON.stringify(users));
//                 toast("Uğurlu giriş!");
//                 localStorage.removeItem("loginAttempts");  // Giriş cəhdlərini sıfırlamaq
//                 setTimeout(() => {
//                     window.location.href = "index.html"; // Giriş uğurlu olarsa ana səhifəyə yönləndirmək
//                 }, 2000);
//             } else {
//                 handleFailedLogin(currentUser);
//             }
//         } else {
//             toast("İstifadəçi adı və ya şifrə yanlışdır.");
//         }
//     }

//     function handleFailedLogin(user) {
//         // Giriş cəhdi sayını artırmaq
//         if (!loginAttempts[user.username]) {
//             loginAttempts[user.username] = { attempts: 0, blockedUntil: 0 };
//         }
//         loginAttempts[user.username].attempts++;

//         // Əgər cəhd sayı maksimumu keçibsə, hesabı bloklayaq
//         if (loginAttempts[user.username].attempts >= MAX_ATTEMPTS) {
//             loginAttempts[user.username].blockedUntil = Date.now() + LOCK_TIME;  // Hesabı bloklayaq
//             toast("Maksimum uğursuz giriş cəhdinə çatdınız. Hesabınız 15 dəqiqəlik müddət üçün bloklanıb.");
//         } else {
//             toast(`Yanlış şifrə. Qalan cəhd sayı: ${MAX_ATTEMPTS - loginAttempts[user.username].attempts}`);
//         }

//         // Giriş cəhdlərini localStorage-a yazırıq
//         localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
//     }

//     function toast(message) {
//         Toastify({
//             text: message,
//             duration: 2000,
//             gravity: "top",
//             position: "left",
//             style: {
//                 background: "linear-gradient(to right, #00b09b, #96c93d)"
//             },
//         }).showToast();
//     }

//     form.addEventListener("submit", login);
// });


document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let form = document.querySelector(".form");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    // Login funksiyası
    function login(e) {
        e.preventDefault();

        // İstifadəçi adı və şifrə ilə uyğun istifadəçi tapılacaq
        let findUser = users.find(user => user.username === username.value && user.password === password.value);

        if (findUser) {
            // Giriş uğurlu olarsa, istifadəçinin məlumatları localStorage-da saxlanır
            findUser.isLogined = true;
            localStorage.setItem("loggedInUser", JSON.stringify(findUser));
            toast("Giriş uğurlu");
            setTimeout(() => {
                window.location.href = "index.html"; // Girişdən sonra ana səhifəyə yönləndirilir
            }, 2000);
        } else {
            toast("İstifadəçi adı və ya şifrə yanlışdır");
        }
    }

    // Toast bildirişləri
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

    form.addEventListener("submit", login);
});
