const DEMO_URL = "https://course-api.com/react-store-products";

function fetchData(DEMO_URL, callback) {
    fetch(DEMO_URL)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log("Error occurred", error);
        });
}

function handleData(data) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous content

    const product = data[0]; // Get the first product (index 0)

    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const idElement = document.createElement("p");
    idElement.textContent = `ID: ${product.id}`;

    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${product.name}`;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${product.price}`;

    const imageElement = document.createElement("img");
    imageElement.src = product.image;

    const colorsElement = document.createElement("p");
    colorsElement.textContent = `Colors: ${product.colors.join(", ")}`;

    const companyElement = document.createElement("p");
    companyElement.textContent = `Company: ${product.company}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Description: ${product.description}`;

    const categoryElement = document.createElement("p");
    categoryElement.textContent = `Category: ${product.category}`;

    const shippingElement = document.createElement("p");
    shippingElement.textContent = `Shipping: ${product.shipping}`;

    productDiv.appendChild(idElement);
    productDiv.appendChild(nameElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(imageElement);
    productDiv.appendChild(colorsElement);
    productDiv.appendChild(companyElement);
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(categoryElement);
    productDiv.appendChild(shippingElement);

    container.appendChild(productDiv);
}

fetchData(DEMO_URL, handleData);
