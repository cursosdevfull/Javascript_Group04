const prices = [20, 34, 23, 12, 58, 84, 76, 50, 8];

const hightest = Math.max(...prices); // 20, 34, 23, 12, 58, 84, 76, 50, 8
const lowest = Math.min(...prices);
console.log(hightest);
console.log(lowest);

const names = ["carlos", "juan", "claudia", "alicia"];
const clone = [...names];

clone[0] = "alberto";

console.log("names", names);
console.log("clone", clone);

const boys = ["Laura", "José", "Carlos", "Rafael", "Luis"];
const girls = ["María", "Jimena", "Claudia", "Rosa"];

const newArr = [...boys, ...girls].sort();

console.log("newArr", newArr);

const newConcat = boys.concat(girls).sort();

console.log("newConcat", newConcat);
