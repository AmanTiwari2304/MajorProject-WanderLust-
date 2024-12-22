//Map Setup:-

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

// Marker to a web map
const marker = new mapboxgl.Marker({color: "Red"})
 .setLngLat(coordinates)
 .setPopup( new mapboxgl.Popup({offset:25}).setHTML(
    `<h3>Wanderlust</h3><p>Exact location will be provided after booking</p>`
 ))
 .addTo(map);



