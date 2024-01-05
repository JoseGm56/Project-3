// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let myMap = L.map("map", {
  center: [31.2500, -99.7500],
  zoom: 5.5
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



jsonData = fetch('../../Resources/cleaned.json')
    .then(response => response.json())
    .then(data => {
      // Handle the parsed JSON data here
              console.log(data);
    })

    .catch(error => console.error('Error fetching JSON:', error));

 
  


  // script.js
  
// ------------------------------------------------------------------------------

// // Fetch the JSON file asynchronously
// fetch('../../Resources/final_cleaned_missing.json')
// .then(response => response.json())
// .then(data => {
//   // Access the data and use it in your JavaScript code
//   console.log('Name:', data.Name);
//   console.log('Missing_Since:', data.Missing_Since);
//   console.log('Missing_Location:', data.Missing_Location);
//   console.log('Classification:', data.Classification);
//   console.log('Sex:', data.Sex);
//   console.log('Race', data.Race);
//   console.log('DoB:', data.DoB);
//   console.log('Missing_Age:', data.Missing_Age);
//   console.log('Current_Age:', data.Current_Age);
//   console.log('Height:', data.Height);
//   console.log('Weight:', data.Weight);
//   console.log('Latitude:', data.Latitude);
//   console.log('Longitude:', data.Longitude);

//   // You can perform further operations with the data here
// })
// .catch(error => console.error('Error fetching JSON:', error));
 
// ------------------------------------------------------------------------------

// // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
// for (let i = 0; i < data.length; i++) {
//   let city = data[i];
//   L.marker(city.Latitude, city.Longitude)
//     .bindPopup(`<h1>${city.Missing_Location}</h1>`)
//     .addTo(myMap);
// }


