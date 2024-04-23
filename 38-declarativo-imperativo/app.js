let products = []; // {id: ..., category: ..., product: ..., price: ...}
let cart = []; // {id: ..., category: ..., product: ..., price: ..., quantity: ...}

function fetchData() {
  products.push({ id: 1, category: "bedroom", product: "Pillow", price: 10 });
  products.push({
    id: 2,
    category: "living room",
    product: "Carpet",
    price: 50.8,
  });
  products.push({
    id: 3,
    category: "outdoor",
    product: "Swimming pool",
    price: 900,
  });
  products.push({
    id: 4,
    category: "bedroom",
    product: "Night table",
    price: 100,
  });
}

function findProductById(id) {
  return products.find((product) => product.id === id);
}

function findIndexProductByIdInShoppingCart(id) {
  return cart.findIndex((item) => item.id === id);
}

function updateShoppingCart(index) {
  cart[index].quantity += 1;
}

function renderShoppingCart() {
  tbodyShoppingCart.innerHTML = "";
  cart.forEach((item) => {
    const tr = addRowCart(item);

    tbodyShoppingCart.append(tr);
  });

  calculateTotal();
}

function addProductToShoppingCart(id) {
  const indexProductInShoppingCart = findIndexProductByIdInShoppingCart(id);

  if (indexProductInShoppingCart >= 0) {
    updateShoppingCart(indexProductInShoppingCart);
  } else {
    const product = findProductById(id);
    const itemShoppingCart = { ...product, quantity: 1 };
    cart.push(itemShoppingCart);
  }

  renderShoppingCart();
}

function sumPrices(accum, item) {
  return accum + item.price * item.quantity;
}

function calculateTotal() {
  total.textContent = cart.reduce(sumPrices, 0);
}

function removeProductToShoppingCart(id) {
  const indexProductInShoppingCart = findIndexProductByIdInShoppingCart(id);

  if (indexProductInShoppingCart >= 0) {
    cart.splice(indexProductInShoppingCart, 1);
  }

  renderShoppingCart();
}

function addCell(value, options) {
  const td = document.createElement("td");
  td.textContent = value;

  if (options) {
    const el = document.createElement(options.element);
    el.textContent = options.content;
    el.className = options.className;
    el.addEventListener(options.event.name, options.event.cb);

    td.append(el);
  }
  return td;
}

function addRow(product) {
  const tr = document.createElement("tr");

  tr.append(addCell(product.id));
  tr.append(addCell(product.category));
  tr.append(addCell(product.product));
  tr.append(addCell(product.price));
  tr.append(
    addCell("", {
      element: "button",
      content: "Add",
      className: "btn btn-success",
      event: {
        name: "click",
        cb: addProductToShoppingCart.bind(this, product.id),
      },
    })
  );

  return tr;
}

function addRowCart(product) {
  const tr = document.createElement("tr");

  tr.append(addCell(product.id));
  tr.append(addCell(product.category));
  tr.append(addCell(product.product));
  tr.append(addCell(product.price));
  tr.append(addCell(product.quantity));
  tr.append(
    addCell("", {
      element: "button",
      content: "Remove",
      className: "btn btn-danger",
      event: {
        name: "click",
        cb: removeProductToShoppingCart.bind(this, product.id),
      },
    })
  );

  return tr;
}

function render() {
  products.forEach((product) => {
    const tr = addRow(product);

    tbody.append(tr);
  });
}

fetchData();
render();
