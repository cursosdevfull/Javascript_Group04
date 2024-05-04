class StorageIndexDB {
  static db;

  constructor() {
    throw Error("Cannot create an instance");
  }

  static create() {
    this.dbRequest = indexedDB.open("ProductsDB", 1);

    this.dbRequest.onsuccess = (evt) => {
      StorageIndexDB.db = evt.target.result;
    };

    this.dbRequest.onupgradeneeded = (evt) => {
      StorageIndexDB.db = evt.target.result;
      const objectStore = StorageIndexDB.db.createObjectStore("products", {
        keyPath: "id",
      });

      objectStore.transaction.oncomplete = async (evt) => {
        await StorageIndexDB.addProduct({ id: "p1", title: "Product 01" });
        await StorageIndexDB.addProduct({ id: "p2", title: "Product 02" });
        await StorageIndexDB.addProduct({ id: "p3", title: "Product 03" });
      };
    };
  }

  static addProduct(product) {
    if (!this.db) throw Error("Must create the database first");
    const productStore = this.getObjectStore("products");
    const request = productStore.add(product);

    return new Promise((resolve, reject) => {
      request.onsuccess = (evt) => resolve("Product saved");
    });
  }

  static getObjectStore(objectStoreName) {
    if (!this.db) throw Error("Must create the database first");
    return this.db
      .transaction(objectStoreName, "readwrite")
      .objectStore(objectStoreName);
  }

  static getProduct(productId) {
    const productStore = this.getObjectStore("products");
    const request = productStore.get(productId);

    return new Promise((resolve, reject) => {
      request.onsuccess = (evt) => resolve(request.result);
    });
  }

  static getProductAll() {
    const productStore = this.getObjectStore("products");
    const request = productStore.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = (evt) => resolve(request.result);
    });
  }

  static updateProduct(productId, newTitle) {
    const productStore = this.getObjectStore("products");
    const request = productStore.get(productId);

    return new Promise((resolve, reject) => {
      request.onsuccess = (evt) => {
        const productToUpdate = evt.target.result;
        productToUpdate.title = newTitle;

        const requestToUpdate = productStore.put(productToUpdate);
        requestToUpdate.onsuccess = (evt) => resolve("Product updated");
      };
    });
  }

  static deleteProduct(productId) {
    const productStore = this.getObjectStore("products");
    const request = productStore.delete(productId);

    return new Promise((resolve, reject) => {
      request.onsuccess = (evt) => {
        resolve("Product deleted");
      };
    });
  }
}

export { StorageIndexDB };
