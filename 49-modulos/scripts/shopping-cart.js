import { Component } from "./component.js";

export class ShoppingCart extends Component {
  productsInCart = [];

  constructor(tagRenderId) {
    super(tagRenderId);
    console.log("ShoppingCart loaded");
  }

  calculateTotalInCart() {
    const sum = this.productsInCart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );
    return sum;
  }

  showProducts() {
    this.cartProducts.innerHTML = "";
    for (const product of this.productsInCart) {
      const template = this.getTemplate("cart-product-item");
      template.querySelector("td:nth-child(1)").textContent = product.title;
      template.querySelector("td:nth-child(2)").textContent =
        product.price.toFixed(2);

      this.cartProducts.append(template);
    }
  }

  cartItems(products) {
    this.productsInCart = products;
    this.showProducts();

    this.totalOutput.innerHTML = `Total: ${this.calculateTotalInCart().toFixed(
      2
    )}`;
  }

  addProduct(product) {
    const listItems = [...this.productsInCart];
    listItems.push(product);
    this.cartItems(listItems);
  }

  render() {
    const cartElement = this.createRootElement("section", "cart");
    cartElement.innerHTML = `
        <div>
          <table id="cartProducts"></table>
        </div>
        <div>
          <h2>Total: 0</h2>
          <button>Order Now</button>
        </div>
    `;

    this.cartProducts = cartElement.querySelector("#cartProducts");
    this.totalOutput = cartElement.querySelector("h2");
  }
}
