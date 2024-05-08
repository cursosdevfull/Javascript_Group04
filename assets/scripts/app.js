let imageProduct;
const products = [];

function render(file) {
  const fileReader = new FileReader();
  fileReader.onload = (result) => {
    photo.style.backgroundImage = `url(${result.target.result})`;
  };
  fileReader.readAsDataURL(file);
}

function renderAsync(file) {
  console.log(file);
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (result) => {
      resolve(`${result.target.result}`);
    };
    fileReader.readAsDataURL(file);
  });
}

function loadImage(evt) {
  imageProduct = evt.target.files[0];
  render(evt.target.files[0]);
}

function triggerClickInputFile() {
  btnImage.click();
}

function onDragOver(evt) {
  evt.preventDefault();
}

function onDrop(evt) {
  evt.preventDefault();
  const file = evt.dataTransfer.files[0];
  imageProduct = file;
  render(file);
}

async function renderProducts() {
  tbody.innerHTML = "";
  for (const product of products) {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    tdId.textContent = product.id;
    const tdTitle = document.createElement("td");
    tdTitle.textContent = product.title;

    const imageBase64 = await renderAsync(product.image);

    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = `${imageBase64}`;
    tdImage.appendChild(img);

    const tdAction = document.createElement("td");

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdImage);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  }
}

function resetForm() {
  inputTitle.value = "";
  photo.style.backgroundImage = "";
}

function addProduct() {
  const id = new Date().getTime();
  const title = inputTitle.value;
  const image = imageProduct;

  products.push({ id, title, image });

  resetForm();

  renderProducts();
}

btnImage.addEventListener("change", loadImage);
photo.addEventListener("click", triggerClickInputFile);

photo.addEventListener("dragover", onDragOver);
photo.addEventListener("drop", onDrop);

btnAddProduct.addEventListener("click", addProduct);
