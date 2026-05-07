const myImgs = [
  "./assets/imgs/alaska.jpg",
  "./assets/imgs/atmosphere.png",
  "./assets/imgs/bird.jpg",
  "./assets/imgs/bird2.jpg",
  "./assets/imgs/duck.jpg",
  "./assets/imgs/hurricane.jpg",
  "./assets/imgs/lake.jpg",
  "./assets/imgs/leopard.jpg",
  "./assets/imgs/sea.jpg",
  "./assets/imgs/tokyo.jpg",
  "./assets/imgs/travel.jpg",
  "./assets/imgs/winter.jpg",
];

function render() {
  const contentImgs = document.getElementById("photoGallery");
  for (let i = 0; i < myImgs.length; i++) {
    contentImgs.innerHTML += `
    <img class="photo" onclick="openOverlay(${i})" src="${myImgs[i]}" alt="Photo ${i + 1}">`;
  }
}

function openOverlay(i) {
  showOverlay();
  setOverlayImage(i);
}

function showOverlay() {
  const overlay = document.getElementById("overlaySection");
  overlay.classList.remove("d_none");
}

function setOverlayImage(i) {
  const overlayImg = document.getElementById("overlayImg");
  overlayImg.src = myImgs[i];
}

function closeOverlay() {
  const closeWindow = document.getElementById("overlaySection");
  closeWindow.classList.add("d_none");
}

const overlayCardStop = document.getElementById("overlayCard");
overlayCardStop.addEventListener("click", function (event) {
  event.stopPropagation();
});
