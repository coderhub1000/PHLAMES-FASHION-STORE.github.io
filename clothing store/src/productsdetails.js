// productDetail.html (where you load the product details)
const selectedProductId = localStorage.getItem('selectedProductId');

// Find the product data by ID
const selectedProduct = shopItemsData.find(item => item.id === selectedProductId);

// Display the selected product in the productDetailContainer
const productDetailContainer = document.getElementById('productDetailContainer');
productDetailContainer.innerHTML = `
    <!-- Create the product detail layout here using selectedProduct data -->
`;



const similarProducts = shopItemsData.filter(item => item.category === selectedProduct.category);

const similarProductsContainer = document.getElementById('similarProductsContainer');
similarProductsContainer.innerHTML = '';

similarProducts.forEach(similarProduct => {
    similarProductsContainer.innerHTML += `
        <!-- Create layout for each similar product -->
    `;
});
