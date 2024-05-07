const enter = () => {
  container.classList.add("selected");
};
const out = () => {
  container.classList.remove("selected");
};

function onDragOver(evt) {
  evt.preventDefault();
  container.classList.add("selected");
}

function onDragLeave(evt) {
  evt.preventDefault();
  container.classList.remove("selected");
}

function onDrop(evt) {
  evt.preventDefault();
  container.classList.remove("selected");
  const files = evt.dataTransfer.files;

  if (files.length > 0) {
    for (const file of files) {
      if (file.type.startsWith("image/")) {
        const fileReader = new FileReader();
        fileReader.onload = function (evt) {
          const image = document.createElement("img");
          image.src = evt.target.result;
          image.style.width = "100px";

          container.appendChild(image);
        };

        fileReader.readAsDataURL(file);

        /* if (file.size < 55000) {
          console.log(`Filename ${file.name} (${file.size})`);
        } else {
          console.log(
            `Size of ${file.name} (${file.size}) exceed limit of 55KB`
          );
        } */
      } else {
        console.log(`It's not a image: ${file.name}`);
      }
    }
  }
}

/* container.addEventListener("mouseenter", enter);
container.addEventListener("mouseout", out); */
container.addEventListener("dragover", onDragOver);
container.addEventListener("dragleave", onDragLeave);
container.addEventListener("drop", onDrop);

function onDragOverPhoto(evt) {
  evt.preventDefault();
  containerPhoto.classList.add("selected");
}

function onDragLeavePhoto(evt) {
  evt.preventDefault();
  photo.classList.remove("selected");
}

function onDropPhoto(evt) {
  evt.preventDefault();
  photo.classList.remove("selected");
  const files = evt.dataTransfer.files;

  if (files.length > 0) {
    if (files[0].type.startsWith("image/")) {
      const fileReader = new FileReader();
      fileReader.onload = function (evt) {
        photo.style.backgroundImage = `url(${evt.target.result})`;

        /*      const image = document.createElement("img");
        image.src = evt.target.result;
        image.style.width = "100px";

        container.appendChild(image); */
      };

      fileReader.readAsDataURL(files[0]);
    } else {
      console.log(`It's not a image: ${files[0].name}`);
    }
  }
}

photo.addEventListener("dragover", onDragOverPhoto);
photo.addEventListener("dragleave", onDragLeavePhoto);
photo.addEventListener("drop", onDropPhoto);
