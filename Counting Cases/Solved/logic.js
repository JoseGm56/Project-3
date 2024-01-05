// // Creating our initial map object:
// // We set the longitude, latitude, and starting zoom level.
// // This gets inserted into the div with an id of "map".
// let myMap = L.map("map", {
//   center: [31.2500, -99.7500],
//   zoom: 5.5
// });


// // Adding a tile layer (the background map image) to our map:
// // We use the addTo() method to add objects to our map.
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);



// fetch('../../Resources/cleaned.json')
//       .then(response => response.json())
//       .then(jsonData => {
//         // Add markers to the map based on JSON data
//         jsonData.forEach(function (location) {
//           var marker = L.marker([location.Latitude, location.Longitude]).addTo(map);
//           marker.bindPopup(location.name); // Add a popup with the location name
//         });
//       })
//       .catch(error => console.error('Error fetching JSON:', error)).addTo(m);