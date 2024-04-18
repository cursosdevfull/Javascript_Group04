const numbers = [1, 2, 10, 30, 98];
console.log("numbers", numbers);

const otherNumbers = Array(3, 5);
console.log("otherNumbers", otherNumbers);

const oneMoreWayNumbers = Array.of(3, 8, 89);
console.log("oneMoreWayNumbers", oneMoreWayNumbers);

const listItems = document.querySelectorAll("li");
console.log("listItems", listItems);

/*const keys = Array(10).keys();
console.log("keys", keys);

const newArray = Array.from(keys);
console.log("newArray", newArray);*/

const newArray = Array.from(Array(1000).keys());
console.log("newArray", newArray);

const otherArray = Array.from({ length: 200 }, (_, index) => {
  if (index < 100) return index * 10;

  return index * 20;
});
console.log("otherArray", otherArray);
