function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bun");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
window.onload = function() {
  showSlides(slideIndex);
  var slider = document.getElementById("bun-container");
  slider.style.visibility = 'visible';
};
  



let map;

async function initMap() {
  // The location coordinates
  const chicago = { lat: 41.9193, lng: -87.6298 };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: chicago,
    mapId: "DEMO_MAP_ID",
  });

  //array consisting of different location coordinates
  const locations = [
    [{ lat: 41.8349, lng: -87.6270 }, "Illinois Institute of Technology", "assets/favicon.ico"],
    [{ lat: 42.0565, lng: -87.6753 }, "Northwestern University", "assets/northwestern-logo.jpeg"],
    [{ lat: 42.0453, lng: -87.6811 }, "Evanson McGaw YMCA", "assets/ymca-logo.png"],
    [{ lat: 41.9811, lng: -87.8397 }, "UScellular Business Office", "assets/uscc-logo.png"],
    [{ lat: 41.8816, lng: -87.6301 }, "J.P. Morgan Chase", "assets/jp-morgan-chase-logo.png"]
  ];

  //for each location, create a marker
  locations.forEach(([position, title, icon], i) => {
    const marker = new google.maps.Marker({
      position,
      map: map,
      icon: icon,
      title: `${title}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}