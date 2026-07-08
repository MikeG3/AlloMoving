document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".moving-gallery img");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("gallery-lightbox-img");
  const closeBtn = document.querySelector(".gallery-close");

  //Arrows
  const gallery = document.querySelector(".moving-gallery");
  const btnLeft = document.querySelector(".gallery-btn.left");
  const btnRight = document.querySelector(".gallery-btn.right");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (!lightboxImg.contains(e.target)) {
      lightbox.style.display = "none";
    }
  });

  //Arrow functionality
  btnLeft.addEventListener("click", () => {
    gallery.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    gallery.scrollBy({ left: 300, behavior: "smooth" });
  });

});