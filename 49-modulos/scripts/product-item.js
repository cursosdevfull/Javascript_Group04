import { App } from "./app.js";
import { Component } from "./component.js";

export class ProductItem extends Component {
  constructor(product, tagRenderId) {
    super(tagRenderId, false);
    this.product = product;
    this.render();
  }

  render() {
    const prodElement = this.createRootElement("li", "product-item");
    prodElement.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" />
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>US ${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
    const addCartButton = prodElement.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    App.addProductToCart(this.product);
  }
}
