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

  cartItems(products) {
    this.productsInCart = products;
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
        <h2>Total: 0</h2>
        <button>Order Now</button>
    `;

    this.totalOutput = cartElement.querySelector("h2");
  }
}
