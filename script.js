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

/** start rendering */
function init() {
  CONTENT.innerHTML = renderMain();
  renderImgs();
}

/** render all html sections into the site */
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

/** creates html for header */
function renderHeader() {
  return /*html*/ `
    <header class="header_section">
      <div class="header">
        <img 
          src="./assets/icons/fotogram_header.svg" 
          alt="Fotogram Logo">
      </div>
    </header>
  `;
}

/** creates html for caption of site */
function renderCaption() {
  return /*html*/ `
    <div class="caption">
      <h1>Your Personal photo album</h1>
    </div>
  `;
}

/** cretes html for footer and informations */
function renderFooter() {
  return /*html*/ `
    <footer class="footer_section">
      <div class="footer">
        <div class="footer_img">
          <img 
            src="./assets/icons/footer_logo.svg" 
            alt="Developer Akademie Logo">
        </div>
        <div class="footer_text">
          <p>© 2023 Developer Akademie GmbH</p>
        </div>
      </div>
    </footer>
  `;
}

/** renders all imgs from MYIMGS-array into gallery */
function renderImgs() {
  const photoGallery = document.getElementById("photo_gallery");
  for (let i = 0; i < MYIMGS.length; i++) {
    photoGallery.innerHTML += getImgsTemplate(i);
  }
}

/** creates html for gallery */
function getImgsTemplate(i) {
  return /*html*/ `
  <button 
    class="photo_button"
    onclick="openDialog(${i})"
    aria-label="Open image ${
      MYIMGS[i].slice(0, 1).toUpperCase() + MYIMGS[i].slice(1, -4)
    }">
    <img 
    class="photo"
    src="./assets/imgs/${MYIMGS[i]}"
    alt="${MYIMGS[i].slice(0, 1).toUpperCase() + MYIMGS[i].slice(1, -4)}">
  </button>
  `;
}

/** opens dialog with selected img */
function openDialog(i) {
  currentImgIndex = i;
  DIALOG.innerHTML = renderDialog(currentImgIndex);
  DIALOG.showModal();
  stopDialogClosingOnCard();
  focusNextButton();
}

/** focusing next button if you open img via Tab-button on keyboard */
function focusNextButton() {
  const nextButton = document.getElementById("nextButton");
  nextButton.focus();
}

/** render dialog and creates needed html with all informations */
function renderDialog(i) {
  return /*html*/ `
    <div class="dialog_card" id="DialogCard">
      <div class="dialog_card_content">
        <div class="card_headline">
          <div>
            ${MYIMGS[i].slice(0, 1).toUpperCase() + MYIMGS[i].slice(1, -4)}
          </div>
        <button 
          class="close_dialog" 
          onclick="closeDialog()" 
          aria-label="Close dialog">
          <img src="./assets/icons/closeicon.svg" alt="">
        </button>
        </div>
          <img 
            id="DialogImg" 
            class="dialog_img" 
            src="./assets/imgs/${MYIMGS[i]}" 
            alt="${
              MYIMGS[i].slice(0, 1).toUpperCase() + MYIMGS[i].slice(1, -4)
            }">
        <div 
          class="card_bottom">
          <button 
            onclick="showPreviousImg('prev')" 
            class="arrows_button"
            aria-label="Previous image">
              <img  
                class="arrow_left" 
                src="./assets/icons/arrow_img.svg" 
                alt="">
          </button>
        <div class="img_counter">
          ${i + 1}/${MYIMGS.length}
        </div>
          <button
            onclick="showNextImg('next')" 
            class="arrows_button" 
            id="nextButton"
            aria-label="Next image">
              <img 
                class="arrow_right" 
                src="./assets/icons/arrow_img.svg" 
                alt="">
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

/** updates dialog informations, title, img, counter */
function updateDialogImg() {
  DIALOG.innerHTML = renderDialog(currentImgIndex);
  stopDialogClosingOnCard();
}

/** stops event-bubbling on card body */
function stopDialogClosingOnCard() {
  const DialogCard = document.getElementById("DialogCard");
  DialogCard.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

/** closes dialog on background-click */
DIALOG.addEventListener("click", function () {
  closeDialog();
});