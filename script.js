const MYIMGS = [
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

const CONTENT = document.getElementById("main");

const DIALOG = document.getElementById("dialog");

function init() {
  CONTENT.innerHTML = renderMain();
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
  for (let i = 0; i < MYIMGS.length; i++) {
    photoGallery.innerHTML += getImgsTemplate(i);
  }
}

function getImgsTemplate(i) {
  return /*html*/ `
  <button class="photo_button"
      onclick="openOverlay(${i})">
    <img class="photo"
      src="./assets/imgs/${MYIMGS[i]}"
      alt="${MYIMGS[i].slice(0, 1).toUpperCase() + MYIMGS[i].slice(1, -4)}"
    >
  </button>
  `;
}

function openOverlay(i) {
  currentImgIndex = i;
  DIALOG.innerHTML = renderDialog(currentImgIndex);
  DIALOG.showModal();
  stopDialogClosingOnCard();
  focusNextButton();
}

function focusNextButton() {
  const nextButton = document.getElementById("nextButton");
  nextButton.focus();
}

function renderDialog(i) {
  return /*html*/ `
    <div class="overlay_card" id="overlayCard">
      <div class="overlay_card_content">
        <div class="card_headline">
          <div>${MYIMGS[i].slice(0, 1).toUpperCase() + MYIMGS[i].slice(1, -4)}</div>
        <button class="close_dialog" onclick="closeDialog()">
          <img src="./assets/icons/closeicon.svg" alt="Close">
        </button>
        </div>
          <img id="overlayImg" class="overlay_img" src="./assets/imgs/${MYIMGS[i]}" alt="Photo ${i + 1}">
        <div class="card_bottom">
          <button onclick="showPreviousImg('prev')" class="arrows_button">
            <img  class="arrow_left" src="./assets/icons/arrow_img.svg" alt="arrow left">
          </button>
        <div class="img_counter">${i + 1}/${MYIMGS.length}</div>
          <button onclick="showNextImg('next')" class="arrows_button" id="nextButton">
            <img class="arrow_right" src="./assets/icons/arrow_img.svg" alt="arrow right">
          </button>
        </div>
      </div>
    </div>
  `;
}

function closeDialog() {
  DIALOG.close();
}

function showNextImg() {
  currentImgIndex++;
  if (currentImgIndex >= MYIMGS.length) {
    currentImgIndex = 0;
  }
  updateDialogImg();
}

function showPreviousImg() {
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = MYIMGS.length - 1;
  }
  updateDialogImg();
}

function updateDialogImg() {
  DIALOG.innerHTML = renderDialog(currentImgIndex);
  stopDialogClosingOnCard();
}

function stopDialogClosingOnCard() {
  const overlayCard = document.getElementById("overlayCard");
  overlayCard.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

DIALOG.addEventListener("click", function () {
  closeDialog();
});
