function initMap() {
  var storeLocation = { lat: 30.427755, lng: -9.598107 }; // Replace with your store's latitude and longitude
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: storeLocation,
  });
  var marker = new google.maps.Marker({
    position: storeLocation,
    map: map,
  });

  var service = new google.maps.places.PlacesService(map);
  service.getDetails(
    {
      placeId: "YOUR_PLACE_ID", // Replace with your Google Place ID
    },
    function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        displayReviews(place.reviews);
      }
    }
  );
}

function displayReviews(reviews) {
  var reviewsContainer = document.getElementById("reviews-container");
  reviews.forEach(function (review) {
    var reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    var reviewContent = `
            <h3>${review.author_name}</h3>
           
        `;
    reviewDiv.innerHTML = reviewContent;
    reviewsContainer.appendChild(reviewDiv);
  });
}


/*script for menu hover */
const menubtn = document.getElementById("sub-menu-link");
const submenu = document.querySelector(".sub-menu");
const outmenu=document.querySelector(".nav-item");
menubtn.addEventListener("mouseover", function () {
  submenu.classList.toggle("sub-menu-display");
});
outmenu.addEventListener("mouseout", function () {
  submenu.classList.remove("sub-menu-display");
});

/* Scipt Slideshow*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
