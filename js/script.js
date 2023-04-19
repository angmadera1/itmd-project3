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
}