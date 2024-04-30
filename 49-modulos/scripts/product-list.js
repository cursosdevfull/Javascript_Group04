import { Component } from "./component.js";
import { ElementAttribute } from "./element-attribute.js";
import { ProductItem } from "./product-item.js";
import { Product } from "./product.js";

export class ProductList extends Component {
  constructor(tagRenderId) {
    super(tagRenderId);
    console.log("ProductList loaded");
    this.loadData();
  }

  loadData() {
    this.products = [
      new Product(
        1,
        "Moon Lamp Floating",
        "https://lamparadeluna.top/wp-content/uploads/2023/09/Lampara-luna-flotante.jpg",
        "Lamp floating",
        200
      ),
      new Product(
        2,
        "Death Star Lamp Floating",
        "https://labombilladedison.wordpress.com/wp-content/uploads/2016/07/altavoz-estrella-muerte.jpg?w=1086",
        "Lamp floating",
        300
      ),
    ];

    this.renderProducts();
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);

    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }
}
