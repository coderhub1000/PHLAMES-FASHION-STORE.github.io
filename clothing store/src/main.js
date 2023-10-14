let shop = document.getElementById("shop");

// Define your shopItemsData array


// Load the basket data from local storage when the page loads
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let itemQuantities = JSON.parse(localStorage.getItem("itemQuantities")) || {};

let generateshop = () => {
    shopItemsData.forEach(itemData => {
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `
            <img width="220px" height="300px" src="${itemData.img}" alt="">
            <div class="details">
                <h3>${itemData.name}</h3>
                <p>${itemData.desc}</p>
                <div class="price-quantity">
                    <h2>&#x20A6;${itemData.price}</h2>
                    <div class="buttons">
                        <i onclick="decrement('${itemData.id}')" class="bi bi-dash-lg"></i>
                        <div id="${itemData.id}" class="quantity">${itemQuantities[itemData.id] || 0}</div>
                        <i onclick="increment('${itemData.id}')" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        `;

        shop.appendChild(newItem);
    });
};

// Call the generateshop function to generate and insert the content
generateshop();

// Function to add an item to the cart
function addItemToCart(itemId) {
    // Add the item to the cart (modify basket and itemQuantities)
    // ...

    // Update the total price
    updateTotalPrice();
}


function addToCart(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the selected item to the cart
    cart.push(itemId);

    // Store the updated cart data in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart icon
    updateCartIcon(cart.length);
}


let totalItemCount = 0; // Initialize the total item count
let totalItemPrice = 0; // Initialize the total item price

// Function to get the item price by ID
let getItemPrice = (id) => {
    // Find the item in shopItemsData and return its price
    const selectedItem = shopItemsData.find(item => item.id === id);
    return selectedItem ? selectedItem.price : 0;
};

// Function to update the cart icon
let updateCartIcon = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.textContent = totalItemCount;
};

// Function to log the total price
let logTotalPrice = () => {
    console.log("Total Price: ₦" + totalItemPrice);
};

// Function to increment item quantity
// Function to increment item quantity
let increment = (id) => {
    if (itemQuantities[id] === undefined) {
        itemQuantities[id] = 0;
    }

    const quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText, 10);
    
    currentQuantity++;
    quantityElement.innerText = currentQuantity;
    totalItemCount++; // Increment the total item count
    totalItemPrice += getItemPrice(id); // Add the item price
    itemQuantities[id] = currentQuantity; // Update the quantity for this item
    basket.push(id); // Add the item to the basket
    updateLocalStorage(); // Update local storage
    updateCartIcon(); // Update the cart icon
    logTotalPrice(); // Log the total price
};


// Function to decrement item quantity
let decrement = (id) => {
    if (itemQuantities[id] === undefined) {
        itemQuantities[id] = 0;
    }

    const quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText, 10);
    if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.innerText = currentQuantity;
        totalItemCount--; // Decrement the total item count
        totalItemPrice -= getItemPrice(id); // Subtract the item price
        itemQuantities[id] = currentQuantity; // Update the quantity for this item

        // Remove the item from the basket if the quantity becomes 0
        if (currentQuantity === 0) {
            const index = basket.indexOf(id);
            if (index > -1) {
                basket.splice(index, 1);
            }
        }

        updateLocalStorage(); // Update local storage
        updateCartIcon(); // Update the cart icon
        logTotalPrice(); // Log the total price
    }
};

// Function to update the basket data in local storage
let updateLocalStorage = () => {
    localStorage.setItem("basket", JSON.stringify(basket));
    // Store item quantities
    localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
};

// Initialize the cart icon and total price based on loaded basket data
totalItemCount = basket.length;
totalItemPrice = basket.reduce((total, id) => total + getItemPrice(id), 0);

// Update the cart icon when the page loads
updateCartIcon();

// Update the cart price when the page loads
logTotalPrice();


function showProductDetails(productId) {
    localStorage.setItem('selectedProductId', productId);
    // Redirect to the product detail page (productDetail.html)
    window.location.href = 'productsdetails.html';
}
