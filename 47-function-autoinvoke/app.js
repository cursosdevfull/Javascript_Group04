(async () => {
  const http01 = new XMLHttpRequest();

  const promiseHttp01 = new Promise((resolve, reject) => {
    http01.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(http01.responseText);
      }
    };

    http01.open("get", "https://jsonplaceholder.typicode.com/users");
    http01.send();
  });

  const promiseHttp02 = new Promise((resolve, reject) => {
    const http02 = new XMLHttpRequest();
    http02.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(http02.responseText);
      }
    };

    http02.open("get", "https://jsonplaceholder.typicode.com/photos");
    http02.send();
  });

  const users = promiseHttp01.then();
  const photos = promiseHttp02.then();
  const listPromises = [users, photos];

  const results = await Promise.all(listPromises);

  console.log("users", results[0]);
  console.log("photos", results[1]);
})();