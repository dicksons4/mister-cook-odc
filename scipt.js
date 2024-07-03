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
const menubtn = documentElementById("nav-item dropdown");
const submenu = document.querySelector("sub-menu");
menubtn.addEventListener("mouseover", function () {
  submenu.classList.toggle("show-menu");
});
menubtn.addEventListener("mouseout", function () {
  submenu.classList.remove("show-menu");
});
