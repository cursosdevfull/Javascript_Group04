const sentXMLHttpRequest = (methodName, url, data) =>
  new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.onload = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(http.response);
      }
    };

    http.responseType = "json";
    http.open(methodName, url);

    if (data) {
      http.send(JSON.stringify(data));
    } else {
      http.send();
    }
  });

const sentFetch = (methodName, url, data) =>
  fetch(url, { method: methodName, body: data }).then((response) =>
    response.json()
  );

const showData = (results) => {
  ul.innerHTML = "";

  /*   for (const el of results) {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.textContent = el.title;
    const p = document.createElement("p");
    const img = document.createElement("img");
    img.src = el.thumbnailUrl;
    p.append(img);
    const btn = document.createElement("button");
    btn.textContent = "Delete";

    li.append(h2);
    li.append(p);
    li.append(btn);

    ul.append(li);
  } */

  /*   tbody.innerHTML = "";

  for (const el of results) {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    tdId.textContent = el.id;
    const tdTitle = document.createElement("td");
    tdTitle.textContent = el.title;
    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = el.thumbnailUrl;
    tdImage.append(img);

    tr.append(tdId);
    tr.append(tdTitle);
    tr.append(tdImage);

    tbody.append(tr);
  } */
};

const fetchData = async () => {
  const results = await sentFetch(
    "get",
    "https://jsonplaceholder.typicode.com/photos"
  );

  showData(results);
};

btnFetch.addEventListener("click", fetchData);
