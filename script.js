let myImgs = [
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
    <img class="photo" src="${myImgs[i]}" alt="Photo ${i + 1}">`;
  }
}
