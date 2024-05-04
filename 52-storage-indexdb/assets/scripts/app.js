import { StorageIndexDB } from "./storage.js";

StorageIndexDB.create();

const retrieve = async () => {
  const product = await StorageIndexDB.getProduct("p1");
  console.log("product", product);
};

const retrieveAll = async () => {
  const products = await StorageIndexDB.getProductAll();
  console.table(products);
};

const update = async () => {
  const response = await StorageIndexDB.updateProduct(
    "p1",
    "new product title"
  );
  console.log(response);
};

const remove = async () => {
  const response = await StorageIndexDB.deleteProduct("p3");
  console.log(response);
};

const save = async () => {
  const response = await StorageIndexDB.addProduct({
    id: "p4",
    title: "Product 04",
  });
  console.log(response);
};

btnSave.addEventListener("click", save);
btnRetrieve.addEventListener("click", retrieve);
btnRetrieveAll.addEventListener("click", retrieveAll);
btnUpdate.addEventListener("click", update);
btnDelete.addEventListener("click", remove);
