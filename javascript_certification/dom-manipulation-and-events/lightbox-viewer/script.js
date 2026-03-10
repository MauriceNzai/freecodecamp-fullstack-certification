document.addEventListener("DOMContentLoaded", () => {

  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("close-btn");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {

      lightbox.style.display = "flex";

      const fullImage = item.src.replace("-thumbnail", "");
      lightboxImage.src = fullImage;

    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function(e){
    if(e.target === lightbox){
      lightbox.style.display = "none";
    }
  });
});

