
let label = document.getElementById('label');
let shoppingbag = document.getElementById('shopping-bag');
let updateLocalStorage = () => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
};
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let itemQuantities = JSON.parse(localStorage.getItem("itemQuantities")) || {}; // Define itemQuantities here
let totalItemCount = 0;


let getItemPrice = (id) => {
    const selectedItem = shopItemsData.find(item => item.id === id);
    return selectedItem ? selectedItem.price : 0;
};


let updateCartIcon = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.textContent = basket.length;
};

updateCartIcon();

let generateCartItems = () => {
    const uniqueItems = new Set(basket);

    if (uniqueItems.size !== 0) {
        shoppingbag.innerHTML = Array.from(uniqueItems).map((itemId) => {
            const item = shopItemsData.find((itemData) => itemData.id === itemId);
            if (item) {
                return `
                <div><br></div>
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" width="100">
                    <div class="item-details">
                        <div class="title-price-x">
                            <h4 class="title-price">
                                <p>${item.name}</p>
                                <p class="card-item-price">&#x20A6;${item.price}</p>
                            </h4>
                            <i onclick="removeItem('${itemId}')" class="bi bi-x-lg"></i>
                        </div>
                        <div class="buttons">
                            <i onclick="decrement('${item.id}')" class="bi bi-dash-lg"></i>
                            <div id="${item.id}" class="quantity">${itemQuantities[item.id] || 0}</div>
                            <i onclick="increment('${item.id}')" class="bi bi-plus-lg"></i>
                        </div>
                        <h3 id="totalPrice_${item.id}"> &#x20A6; ${itemQuantities[item.id] * item.price || 0}</h3>
                    </div>
                </div>`;
            }
        }).join('');
        
        
        
    
    } else {
        shoppingbag.innerHTML = '';
        label.innerHTML = `
            <h2>Your shopping bag is empty</h2>
            <a href="home.html">
                <button class="HomeBtn">BACK TO HOME</button>
            </a>
            `
        ;
        
    }
};

generateCartItems();

// Function to calculate the total bill
let calculateTotalPrice = () => {
    let totalBill = 0;

    // Calculate the total bill by iterating over the selected items
    for (const itemId in itemQuantities) {
        const quantity = itemQuantities[itemId];
        const itemPrice = getItemPrice(itemId);
        totalBill += quantity * itemPrice; // Multiply quantity by item price
    }

    // Update the total bill on the page
    logTotalPrice(totalBill);
};



// Function to calculate the total bill
let updateTotalBill = () => {
    totalItemPrice = getTotalPrice();
    logTotalPrice();
};

// Function to display the total bill on the page




let totalItemPrice = 0;

// Function to calculate the total bill


// Function to display the total bill on the page
let logTotalPrice = (totalPrice) => {
    let totalBillElement = document.getElementById('totalBill');
    totalBillElement.textContent = `Total Bill: ${totalPrice}`;
    
};
label.innerHTML += `
        <button class="checkout" >Checkout</button>
        <button onclick="clearcart()" class="removeAll">Clear Bag</button>
`;


let increment = (id) => {
    if (itemQuantities[id] === undefined) {
        itemQuantities[id] = 0;
    }

    const quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText, 10);

    currentQuantity++;
    quantityElement.innerText = currentQuantity;
    itemQuantities[id] = currentQuantity;
    basket.push(id);

    const itemPrice = getItemPrice(id);
    const itemTotalPriceElement = document.getElementById(`totalPrice_${id}`);
    const itemTotalPrice = currentQuantity * itemPrice;
    itemTotalPriceElement.innerText = `₦${itemTotalPrice}`;

    calculateTotalPrice();
    updateLocalStorage();
    updateCartIcon();
};

let decrement = (id) => {
    const index = basket.indexOf(id);
    if (index > -1) {
        basket.splice(index, 1);

        const quantityElement = document.getElementById(id);
        if (quantityElement) {
            const currentQuantity = parseInt(quantityElement.innerText, 10);

            if (currentQuantity > 0) {
                itemQuantities[id] = currentQuantity - 1;
                quantityElement.innerText = itemQuantities[id];

                const itemPrice = getItemPrice(id);
                const itemTotalPriceElement = document.getElementById(`totalPrice_${id}`);
                const itemTotalPrice = itemQuantities[id] * itemPrice;
                itemTotalPriceElement.innerText = `₦${itemTotalPrice}`;
            }
        }

        calculateTotalPrice();
        updateLocalStorage();
        updateCartIcon();
    }
    generateCartItems();
};






let removeItem = (itemId) => {
    const itemQuantity = itemQuantities[itemId];
    if (itemQuantity) {
        totalItemCount -= itemQuantity;
        totalItemPrice -= (getItemPrice(itemId) * itemQuantity);
        delete itemQuantities[itemId];

        basket = basket.filter((id) => id !== itemId);

        calculateTotalPrice();
        updateLocalStorage();
        updateCartIcon();
        logTotalPrice();
        generateCartItems();
    }
};


let calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () => {
    calculateTotalPrice();
});



const clearCartAndRefreshUI = () => {
    // Clear the cart and itemQuantities
    basket = [];
    itemQuantities = {};

    // Update local storage
    updateLocalStorage();

    // Refresh the UI on both pages
    generateCartItems();
    updateCartIcon();

    // Redirect back to home.html
    window.location.href = "home.html";
}


let clearcart = ()=>{
    basket = []
    generateCartItems();
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
    clearCartAndRefreshUI();
}