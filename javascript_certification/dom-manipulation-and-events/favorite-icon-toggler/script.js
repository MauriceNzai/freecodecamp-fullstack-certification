document.addEventListener("DOMContentLoaded", function() {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");

  favoriteIcons.forEach(function (icon) {
    icon.addEventListener("click", function (){
      // Use toggle instead of separate remove & add
      icon.classList.toggle('filled');

      if(icon.classList.contains("filled")){
        //icon.classList.remove("filled");
        icon.innerHTML = "&#10084;";
      }else{
        // icon.classList.add("filled");
        icon.innerHTML = "&#9825;";
      }
    });
  });
});
