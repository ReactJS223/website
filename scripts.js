// Sample product data
const productsData = [
    {
        name: 'Product 1',
        image: 'https://via.placeholder.com/150',
        price: '$19.99'
    },
    {
        name: 'Product 2',
        image: 'https://via.placeholder.com/150',
        price: '$24.99'
    },
    {
        name: 'Product 3',
        image: 'https://via.placeholder.com/150',
        price: '$14.99'
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('productList');

    productsData.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        productList.appendChild(productItem);
    });
}

// Call the function to display products when the page loads
window.addEventListener('load', displayProducts);

