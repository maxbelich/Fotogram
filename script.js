const myImgs = [
  "alaska.jpg",
  "atmosphere.png",
  "bird.jpg",
  "bird2.jpg",
  "duck.jpg",
  "hurricane.jpg",
  "lake.jpg",
  "leopard.jpg",
  "sea.jpg",
  "tokyo.jpg",
  "travel.jpg",
  "winter.jpg",
];

let currentImgIndex = 0;

const content = document.getElementById("main");

const dialog = document.getElementById("dialog");

function init() {
  content.innerHTML = renderMain();
  renderImgs();
}

function renderMain() {
  return /*html*/ `
    ${renderHeader()}
    <main class="content">
      ${renderCaption()}
      <section id="photo_gallery"></section>
    </main>
    ${renderFooter()}
  `;
}

function renderHeader() {
  return /*html*/ `
    <header class="header_section">
      <div class="header">

        <img src="./assets/icons/fotogram_header.svg" alt="Fotogram Logo">
      
    </div>
    </header>
  `;
}

function renderCaption() {
  return /*html*/ `
    <div class="caption">
      <h1>Your Personal photo album</h1>
    </div>
  `;
}

function renderFooter() {
  return /*html*/ `
    <footer class="footer_section">
      <div class="footer">
        <div class="footer_img">

          <img src="./assets/icons/footer_logo.svg" alt="DA Logo">
        
        </div>
        <div class="footer_text">
          <p>© 2023 Developer Akademie GmbH</p>
        </div>
      </div>
    </footer>
  `;
}

function renderImgs() {
  const photoGallery = document.getElementById("photo_gallery");
  for (let i = 0; i < myImgs.length; i++) {
    photoGallery.innerHTML += getImgsTemplate(i);
  }
}

function getImgsTemplate(i) {
  return /*html*/ `
    <img 
      class="photo"
      onclick="openOverlay(${i})"
      src="./assets/imgs/${myImgs[i]}"
      alt="Photo ${i + 1}"
    >
  `;
}

function openOverlay(i) {
  currentImgIndex = i;
  dialog.innerHTML = renderDialog(currentImgIndex);
  dialog.showModal();
  stopDialogClosingOnCard();
}

function renderDialog(i) {
  return /*html*/ `
    <div class="overlay_card" id="overlayCard">
      <div class="overlay_card_content">
        <div class="card_headline">
          <div>${myImgs[i].slice(0, -4)}</div>
          
          <img class="close_dialog" onclick="closeDialog()" src="./assets/icons/closeicon.svg" alt="Close">
        
        </div>

        <img id="overlayImg" class="overlay_img" src="./assets/imgs/${myImgs[i]}" alt="Photo ${i + 1}">

        <div class="card_bottom">
            <button onclick="showPreviousImg()" class="arrows_button">
          <img  class="arrow_left" src="./assets/icons/arrow_img.svg" alt="arrow left">
</button>

          <div class="img_counter">${i + 1}/${myImgs.length}</div>
          <button onclick="showNextImg()" class="arrows_button">
          <img class="arrow_right" src="./assets/icons/arrow_img.svg" alt="arrow right">
</button>

        </div>
      </div>
    </div>
  `;
}

function closeDialog() {
  dialog.close();
}

function showNextImg() {
  currentImgIndex++;
  if (currentImgIndex >= myImgs.length) {
    currentImgIndex = 0;
  }
  updateDialogImg();
}

function showPreviousImg() {
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = myImgs.length - 1;
  }
  updateDialogImg();
}

function updateDialogImg() {
  dialog.innerHTML = renderDialog(currentImgIndex);
  stopDialogClosingOnCard();
}

function stopDialogClosingOnCard() {
  const overlayCard = document.getElementById("overlayCard");
  overlayCard.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

dialog.addEventListener("click", function () {
  closeDialog();
});
