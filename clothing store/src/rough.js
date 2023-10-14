{
    id: "item1",
    name: "velvet",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/1.jpg"
},
{
    id: "item2",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/2.jpg"
},
{
    id: "item3",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/3.jpg"
},
{
    id: "item4",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/4.jpg"
},
{
    id: "item5",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/5.jpg"
},
{
    id: "item6",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/6.jpg"
},
{
    id: "item7",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/7.jpg"
},
{
    id: "item8",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/8.jpg"
},
{
    id: "item9",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/9.jpg"
},
{
    id: "item10",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/10.jpg"
},
{
    id: "item11",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/11.jpg"
},
{
    id: "item12",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/12.jpg"
},
{
    id: "item13",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/13.jpg"
},
{
    id: "item14",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/14.jpg"
},
{
    id: "item15",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/15.jpg"
},
{
    id: "item16",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/16.jpg"
},
{
    id: "item17",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/17.jpg"
},
{
    id: "item18",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/18.jpg"
},
{
    id: "item19",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/19.jpg"
},
{
    id: "item20",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/20.jpg"
},
{
    id: "item21",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/21.jpg"
},
{
    id: "item22",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/22.jpg"
},
{
    id: "item23",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/23.jpg"
},
{
    id: "item24",
    name: "velvet",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/24.jpg"
},



// Load the basket data from local storage when the page loads
let basket = JSON.parse(localStorage.getItem("basket")) || [];

let shop = document.getElementById("shop");

// Define your shopItemsData array
let shopItemsData = [
    {
        id: "item1",
        name: "velvet",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/1.jpg"
    },
    {
        id: "item2",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/2.jpg"
    },
    {
        id: "item3",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/3.jpg"
    },
    {
        id: "item4",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/4.jpg"
    },
    {
        id: "item5",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/5.jpg"
    },
    {
        id: "item6",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/6.jpg"
    },
    {
        id: "item7",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/7.jpg"
    },
    {
        id: "item8",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/8.jpg"
    },
    {
        id: "item9",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/9.jpg"
    },
    {
        id: "item10",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/10.jpg"
    },
    {
        id: "item11",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/11.jpg"
    },
    {
        id: "item12",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/12.jpg"
    },
    {
        id: "item13",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/13.jpg"
    },
    {
        id: "item14",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/14.jpg"
    },
    {
        id: "item15",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/15.jpg"
    },
    {
        id: "item16",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/16.jpg"
    },
    {
        id: "item17",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/17.jpg"
    },
    {
        id: "item18",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/18.jpg"
    },
    {
        id: "item19",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/19.jpg"
    },
    {
        id: "item20",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/20.jpg"
    },
    {
        id: "item21",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/21.jpg"
    },
    {
        id: "item22",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/22.jpg"
    },
    {
        id: "item23",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/23.jpg"
    },
    {
        id: "item24",
        name: "velvet",
        price: 2000,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/24.jpg"
    },
];

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
                        <div id="${itemData.id}" class="quantity">0</div>
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

let totalItemCount = 0;
let totalItemPrice = 0;

let itemQuantities = {};

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
let increment = (id) => {
    if (itemQuantities[id] === undefined) {
        itemQuantities[id] = 0;
    }

    const quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText, 10);

    if (itemQuantities[id] < 5) { // Adjust the maximum allowed quantity
        currentQuantity++;
        quantityElement.innerText = currentQuantity;
        totalItemCount++; // Increment the total item count
        totalItemPrice += getItemPrice(id); // Add the item price
        itemQuantities[id]++; // Increment the quantity for this item
        basket.push(id); // Add the item to the basket
        updateLocalStorage(); // Update local storage
        updateCartIcon(); // Update the cart icon
        logTotalPrice(); // Log the total price
    }
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
        itemQuantities[id]--; // Decrement the quantity for this item

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
};

// Initialize the cart icon and total price based on loaded basket data
totalItemCount = basket.length;
totalItemPrice = basket.reduce((total, id) => total + getItemPrice(id), 0);

// Update the cart icon when the page loads
updateCartIcon();

// Update the cart price when the page loads
logTotalPrice();








if(basket.length !== 0) {
    return (shoppingbag.innerHTML = basket.map((x)=>{
        console.log(x);
        let { id, item} = x;
        let search = shopItemsData.find((y)=>y.id === id) || []
        return`
        <div class="class-item">
        <img src=$(search.img) alt="" />
        </div>
        `
    }).join(''));
}else{
    shoppingbag.innerHTML = ``
    label.innerHTML =`
    <h2>YOUR SHOPPING BAG IS EMPTY</h2>
    <a href="home.html">
        <button class="HomeBtn">BACK TO HOME</button>
    </a>
    `;
}
};

generateCartItems();





let label = document.getElementById('label')
let shoppingbag = document.getElementById('shopping-bag')
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let itemQuantities = JSON.parse(localStorage.getItem("itemQuantities")) || {};



let updateCartIcon = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.textContent = basket.length; // Update the cart icon based on the number of items
};

// Update the cart icon when the page loads
updateCartIcon();

let generateCartItems = () => { 
    if (basket.length !== 0) {
        shoppingbag.innerHTML = basket.map((itemId) => {
            const item = shopItemsData.find((itemData) => itemData.id === itemId);
            const imagePath = images[itemId]; // Get the image path from the images object
            if (item) {
                return `
                    <div class="cart-item">
                        <img src="${imagePath}" alt="${item.name}">
                        <div class="item-details">
                            <h3>${item.name}</h3>
                            <p>${item.desc}</p>
                            <div class="price-quantity">
                                <h2>&#x20A6;${item.price}</h2>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');
    } else {
        shoppingbag.innerHTML = '';
        label.innerHTML = `
            <h2>Your shopping bag is empty</h2>
            <a href="home.html">
                <button class="HomeBtn">BACK TO HOME</button>
            </a>
        `;
    }
};

generateCartItems();




;let increment = (id) => {
    if (itemQuantities[id] === undefined) {
        itemQuantities[id] = 0;
    }

    const quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText, 10);

    currentQuantity++;
    quantityElement.innerText = currentQuantity;

    // Update the total item price
    totalItemPrice += getItemPrice(id);

    itemQuantities[id] = currentQuantity;
    basket.push(id);

    // Update local storage, cart icon, and cart items
    updateLocalStorage();
    updateCartIcon();
    generateCartItems();
};

let decrement = (id) => {
    if (itemQuantities[id] === undefined) {
        itemQuantities[id] = 0;
    }

    const quantityElement = document.getElementById(id);
    let currentQuantity = parseInt(quantityElement.innerText, 10);

    if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.innerText = currentQuantity;
        
        // Update the total item price
        totalItemPrice -= getItemPrice(id);

        itemQuantities[id] = currentQuantity;

        // Remove the item from the basket if the quantity is 0
        if (currentQuantity === 0) {
            const index = basket.indexOf(id);
            if (index > -1) {
                basket.splice(index, 1);
            }
        }

        // Update local storage, cart icon, and cart items
        updateLocalStorage();
        updateCartIcon();
        generateCartItems();
    }
};





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



let label = document.getElementById('label');
let shoppingbag = document.getElementById('shopping-bag');
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let itemQuantities = JSON.parse(localStorage.getItem("itemQuantities")) || {};

let getItemPrice = (id) => {
    const selectedItem = shopItemsData.find(item => item.id === id);
    return selectedItem ? selectedItem.price : 0;
};

let updateCartIcon = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.textContent = basket.length; // Update the cart icon based on the number of items
};

// Update the cart icon when the page loads
updateCartIcon();

let generateCartItems = () => {
    // Create a set to keep track of unique item IDs in the cart
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
                            <h3>&#x20A6; ${itemQuantities[item.id] * item.price || 0}</h3>
                        </div>
                    </div>
                `;
            }
        }).join('');
    } else {
        shoppingbag.innerHTML = '';
        label.innerHTML = `
            <h2>Your shopping bag is empty</h2>
            <a href="home.html">
                <button class="HomeBtn">BACK TO HOME</button>
            </a>
        `;
    }
};

generateCartItems();



let updateQuantityDisplay = (id) => {
    const quantityElement = document.getElementById(id);
    if (quantityElement) {
        const quantity = itemQuantities[id] || 0;
        quantityElement.innerText = quantity;
    }
};


let logTotalPrice = () => {
    console.log("Total Price: ₦" + totalItemPrice);
};


let totalItemPrice = 0;

let getTotalPrice = () => {
    return basket.reduce((total, id) => total + getItemPrice(id), 0);
};
 


let removeItem = (itemId) => {
    const itemQuantity = itemQuantities[itemId];
    if (itemQuantity) {
        totalItemCount -= itemQuantity;
        totalItemPrice -= (getItemPrice(itemId) * itemQuantity);
        delete itemQuantities[itemId];

        basket = basket.filter((id) => id !== itemId);

        updateLocalStorage();
        updateCartIcon();
        logTotalPrice();
        generateCartItems();
    }
};
