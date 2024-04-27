/* let counter = 0;

for (let index = 0; index < 1000000000; index++) {
  counter++;
}

console.log("counter", counter); */

const promise = new Promise((resolve, reject) => {
  let counter = 0;

  for (let index = 0; index < 1000000000; index++) {
    counter++;
  }

  //resolve(counter);
  reject("promise failed");

  /*   setTimeout(() => {
    console.log("promise achieved");
    resolve();
  }, 5000); */
});

/* promise.then(
  (param) => {
    console.log("promise resolved", param);
  },
  (error) => {
    console.log("error", error);
  }
); */

promise.then((param) => {
  console.log("promise resolved", param);
});

promise.catch((error) => {
  console.log("error", error);
});

console.log("current date", new Date());

const http = new XMLHttpRequest();

const promiseHttp = new Promise((resolve, reject) => {
  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      resolve(http.responseText);
    }
  };

  http.open("get", "https://jsonplaceholder.typicode.com/users");
  http.send();
});

promiseHttp.then((users) => console.log(users));
