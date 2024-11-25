

// let users = JSON.parse(localStorage.getItem("users"));
// let currentUser = users.find((user) => user.isLogined === true);
// let basket = currentUser.basket || [];

// function createBasket() {
//     if (basket.length > 0) {
//         basket.forEach((product) => {
//             let basketItem = document.createElement("div");
//             basketItem.classList.add("basket-item");

//             let image = document.createElement("div");
//             image.classList.add("image");
//             let img = document.createElement("img");

//             let title = document.createElement("div");
//             title.classList.add("title");

//             let category = document.createElement("p");
//             category.classList.add("category");
//             let price = document.createElement("p");
//             price.classList.add("price");

//             let countArea = document.createElement("div");
//             countArea.classList.add("count-area");

//             let minus = document.createElement("button");
//             minus.classList.add("minus-btn");
//             minus.textContent = "-";
//             minus.disabled = product.count <= 0;  // Disable minus if count is 0
//             minus.addEventListener("click", () => decreement(product.id, count, minus, price));

//             let count = document.createElement("p");
//             count.classList.add("count");
//             count.textContent = product.count;

//             let plus = document.createElement("button");
//             plus.classList.add("plus-btn");
//             plus.textContent = '+';
//             plus.addEventListener("click", () => increement(product.id, count, minus,price));

//             let remove = document.createElement("button");
//             remove.classList.add("btn", "btn-danger", "remove-btn");
//             remove.textContent = "Remove";
//             remove.addEventListener("click", () => removeProduct(product.id, basketItem));

//             countArea.append(minus, count, plus);
//             image.append(img);
//             basketItem.append(image, title, category, price, countArea, remove);
//             let basketContainer = document.querySelector(".basket");
//             basketContainer.append(basketItem);

//             img.src = product.img;
//             title.textContent = product.title.slice(0, 20) + "...";
//             category.textContent = product.category;
//             price.textContent = `$${product.price}`;
//             count.textContent = product.count;
//         });
//     }
// }

// createBasket();

// function increement(productId, count, minus, price) {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     let exsistProduct = basket.find((product) => product.id === productId);

//     if (exsistProduct) {
//         exsistProduct.count++;
//     }

//      price.textContent = `$${(exsistProduct.price * exsistProduct.count).toFixed(2)};`
//     count.textContent = exsistProduct.count;

//     // Enable minus button if count is greater than 0
//     minus.disabled = exsistProduct.count <= 0;

//     users[userIndex].basket = basket;
//     localStorage.setItem("users", JSON.stringify(users));
//     updateTotalPrice()
// }

// function decreement(productId, count, minus, price) {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     let exsistProduct = basket.find((product) => product.id === productId);

//     if (exsistProduct && exsistProduct.count >0) {
//         exsistProduct.count--;
//     }
//  price.textContent = `$${(exsistProduct.price * exsistProduct.count).toFixed(2)};`
//     count.textContent = exsistProduct.count;

//     // Disable minus button if count is 0
//     minus.disabled = exsistProduct.count ===1;

//     users[userIndex].basket = basket;
//     localStorage.setItem("users", JSON.stringify(users));
//     updateTotalPrice()
// }

// // Remove individual product from basket
// function removeProduct(productId, basketItem) {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     let productIndex = basket.findIndex((product) => product.id === productId);

//     if (productIndex !== -1) {
//         basket.splice(productIndex, 1);  // Remove the product from the basket
//     }

//     // Remove the product item from the DOM
//     basketItem.remove();

//     users[userIndex].basket = basket;
//     localStorage.setItem("users", JSON.stringify(users));

//     // Update the basket total after removal (you can create this function if needed)
//     updateTotalPrice();
// }

// // Remove all items from basket
// let removeAllButton = document.querySelector(".remove-all");

// removeAllButton.addEventListener("click", function() {
//         let basketContainer = document.querySelector(".basket");
//         basketContainer.innerHTML = '';  // Clear all items in the basket

//         let userIndex = users.findIndex((user) => user.id === currentUser.id);
//         users[userIndex].basket = [];  // Clear basket in localStorage
//         localStorage.setItem("users", JSON.stringify(users));

//         // Update the basket total (if you have a total price function)
    
    
// });

// // Function to update the total price of the basket
// function updateTotalPrice() {
//     let totalPrice = 0;
//     basket.forEach((product) => {
//         totalPrice += product.price * product.count;
//     });
//     let total =document.querySelector(".total-price")
//     total.textContent = `$${totalPrice.toFixed(2)}`;
// }
// updateTotalPrice()



let users = JSON.parse(localStorage.getItem("users"));
let currentUser = users.find((user) => user.isLogined === true);
let basket = currentUser.basket || [];

function createBasket() {
    if (basket.length > 0) {
        basket.forEach((product) => {
            let basketItem = document.createElement("div");
            basketItem.classList.add("basket-item");

            let image = document.createElement("div");
            image.classList.add("image");
            let img = document.createElement("img");

            let title = document.createElement("div");
            title.classList.add("title");

            let category = document.createElement("p");
            category.classList.add("category");
            let price = document.createElement("p");
            price.classList.add("price");

            let countArea = document.createElement("div");
            countArea.classList.add("count-area");

            let minus = document.createElement("button");
            minus.classList.add("minus-btn");
            minus.textContent = "-";
            minus.disabled = product.count <= 0;  // Disable minus if count is 0
            minus.addEventListener("click", () => decreement(product.id, count, minus, price));

            let count = document.createElement("p");
            count.classList.add("count");
            count.textContent = product.count;

            let plus = document.createElement("button");
            plus.classList.add("plus-btn");
            plus.textContent = '+';
            plus.addEventListener("click", () => increement(product.id, count, minus, price));

            let remove = document.createElement("button");
            remove.classList.add("btn", "btn-danger", "remove-btn");
            remove.textContent = "Remove";
            remove.addEventListener("click", () => removeProduct(product.id, basketItem));

            countArea.append(minus, count, plus);
            image.append(img);
            basketItem.append(image, title, category, price, countArea, remove);
            let basketContainer = document.querySelector(".basket");
            basketContainer.append(basketItem);

            img.src = product.image;  // Düzəliş: product.img əvəzinə product.image
            title.textContent = product.title.slice(0, 20) + "...";
            category.textContent = product.category;
            price.textContent = `$${product.price}`;
            count.textContent = product.count;
        });
    }
}

createBasket();

function increement(productId, count, minus, price) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let exsistProduct = basket.find((product) => product.id === productId);

    if (exsistProduct) {
        exsistProduct.count++;
    }

    // Güncellenmiş qiyməti göstəririk
    price.textContent = `$${(exsistProduct.price * exsistProduct.count).toFixed(2)}`;
    count.textContent = exsistProduct.count;

    // Minus düyməsini aktiv etmək
    minus.disabled = exsistProduct.count <= 0;

    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));
    updateTotalPrice();
}

function decreement(productId, count, minus, price) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let exsistProduct = basket.find((product) => product.id === productId);

    if (exsistProduct && exsistProduct.count > 0) {
        exsistProduct.count--;
    }

    // Güncellenmiş qiyməti göstəririk
    price.textContent = `$${(exsistProduct.price * exsistProduct.count).toFixed(2)}`;
    count.textContent = exsistProduct.count;

    // Minus düyməsini deaktiv etmək
    minus.disabled = exsistProduct.count <= 0;

    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));
    updateTotalPrice();
}

// Remove individual product from basket
function removeProduct(productId, basketItem) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let productIndex = basket.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
        basket.splice(productIndex, 1);  // Remove the product from the basket
    }

    // Remove the product item from the DOM
    basketItem.remove();

    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));

    updateTotalPrice();
}

// Remove all items from basket
let removeAllButton = document.querySelector(".remove-all");

removeAllButton.addEventListener("click", function() {
    let basketContainer = document.querySelector(".basket");
    basketContainer.innerHTML = '';  // Clear all items in the basket

    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    users[userIndex].basket = [];  // Clear basket in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    updateTotalPrice();
});

// Function to update the total price of the basket
function updateTotalPrice() {
    let totalPrice = 0;
    basket.forEach((product) => {
        totalPrice += product.price * product.count;
    });
    let total = document.querySelector(".total-price");
    total.textContent = `$${totalPrice.toFixed(2)}`;
}

updateTotalPrice();
