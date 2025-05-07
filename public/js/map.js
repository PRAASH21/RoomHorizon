mapboxgl.accessToken = mapToken;


const map = new mapboxgl.Map({
    container: 'map',
    center: listing.geometry.coordinates,
    zoom: 9
});
const marker = new mapboxgl.Marker()
    .setLngLat(listing.geometry.coordinates)
    .addTo(map);