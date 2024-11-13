const products = [
    {
        id: 1,
        title: 'Товар 1',
        description: 'Описание товара 1',
        image: 'img/istockphoto-1385970223-612x612.jpg' // Путь к изображению товара
    },
    {
        id: 2,
        title: 'Товар 2',
        description: 'Описание товара 2',
        image: 'img/istockphoto-1385970223-612x612.jpg' // Путь к изображению товара
    },
    {
        id: 3,
        title: 'Товар 3',
        description: 'Описание товара 3',
        image: 'img/istockphoto-1385970223-612x612.jpg' // Путь к изображению товара
    }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id')); // Получаем ID товара

const product = products.find(item => item.id === productId);

if (product) {
    const productDetailSection = document.getElementById('product-detail');
    productDetailSection.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="Изображение товара ${product.title}" />
        <p><strong>Описание:</strong> ${product.description}</p>
        <p><strong>Цена:</strong> ${product.price}</p>
    `;
} else {
    document.getElementById('product-detail').innerHTML = '<p>Товар не найден.</p>';
}

