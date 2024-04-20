let products = [];
let originalProducts = [];

function fetchProducts() {
  const productNames = [
    "Product1",
    "Product2",
    "Product3",
    "Product4",
    "Product5",
    "Product6",
    "Product7",
    "Product8",
    "Product9",
    "Product10",
  ];

  for (let i = 0; i < 40; i++) {
    const product = {
      name: productNames[Math.floor(Math.random() * productNames.length)],
      stock: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      price: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    };
    products.push(product);
  }

  products.forEach((product) => {
    if (product.price > 300) {
      product.taxes = product.price * 0.18;
    } else {
      product.taxes = product.price * 0.05;
    }
    product.total = product.price + product.taxes;
  });

  originalProducts = [...products];
}

function clearProducts() {
  tbody.innerHTML = "";
}

function loadProducts() {
  clearProducts();

  products.forEach((product) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = product.name;
    const tdStock = document.createElement("td");
    tdStock.textContent = product.stock;
    const tdPrice = document.createElement("td");
    tdPrice.textContent = product.price.toFixed(2);
    const tdTaxes = document.createElement("td");
    tdTaxes.textContent = product.taxes.toFixed(2);
    const tdTotal = document.createElement("td");
    tdTotal.textContent = product.total.toFixed(2);

    tr.append(tdName);
    tr.append(tdStock);
    tr.append(tdPrice);
    tr.append(tdTaxes);
    tr.append(tdTotal);

    tbody.append(tr);
  });
}

fetchProducts();
loadProducts();
