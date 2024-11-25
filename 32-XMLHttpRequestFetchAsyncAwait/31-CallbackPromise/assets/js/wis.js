document.addEventListener("DOMContentLoaded", ()=>{
    let wisItem () {
        products.forEach(product => {
            let card = document.createElement('div');
            card.classList.add('card');
            
            let image = document.createElement("div");
            image.classList.add('card-image');
            let img = document.createElement("img");
            
            let cardContent = document.createElement("div");
            cardContent.classList.add('card-content');
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card-title");
            let category = document.createElement("p");
            category.classList.add("card-category");
            let cardDescription = document.createElement("p");
            cardDescription.classList.add("card-description");
            let cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer");
            let price = document.createElement("span");
            price.classList.add("card-price");
            let rating = document.createElement('div');
            rating.classList.add('card-rating');
            let ratingStars = document.createElement('span');
            let count = document.createElement("span");
            let heart = document.createElement("i");
            heart.classList.add("far", "fa-heart", "card-heart");
        })
    }
})