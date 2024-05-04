import { selectFactory, Storage } from "./storage.js";

class Store {
  constructor() {
    const factory = selectFactory("cookie");
    this.storage = new Storage(factory);
  }

  save() {
    const reSave = this.storage.save.bind(this.storage);
    reSave("valueEnteredByUser", this.getValueEnteredByUser());
  }

  getValueEnteredByUser() {
    const value = inpValue.value;
    if (!value.trim()) {
      throw Error("Value cannot empty");
    }
    return value;
  }
}

const store = new Store();

btnSave.addEventListener("click", store.save.bind(store));
btnRetrieve.addEventListener(
  "click",
  store.storage.retrieve.bind(store.storage, "valueEnteredByUser")
);
btnDelete.addEventListener("click", store.storage.remove.bind(store.storage));
