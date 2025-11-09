let videos = document.querySelectorAll(".video-slider video");
let navBtns = document.querySelectorAll(".nav-btn");
let captions = document.querySelectorAll(".caption");

let currentIndex = 0;

// Fungsi ganti slide
function changeSlide(index) {
  // video
  videos.forEach((video, i) => {
    video.classList.remove("active");
    navBtns[i].classList.remove("active");
    captions[i].classList.remove("active");
  });
  videos[index].classList.add("active");
  navBtns[index].classList.add("active");
  captions[index].classList.add("active");
  currentIndex = index;
}


// ...existing code...
function prevSlide() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = videos.length - 1;
  changeSlide(newIndex);
}

function nextSlide() {
  let newIndex = (currentIndex + 1) % videos.length;
  changeSlide(newIndex);
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % videos.length;
  changeSlide(currentIndex);
}, 10000);

navBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    changeSlide(i);
  });
});
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


