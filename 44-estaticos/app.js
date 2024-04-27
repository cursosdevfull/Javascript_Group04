class App {
  static title = "My App";
  static id = "abc-123";

  getTitle() {
    return this.title;
  }

  static generateID() {
    return this.id;
  }
}

/* const app = new App();
console.log("title", app.title); */

console.log("title", App.title);

const app = new App();
console.log("title", app.getTitle());
console.log("ID", App.generateID());
