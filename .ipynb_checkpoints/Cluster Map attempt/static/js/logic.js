// Creating the map object
let myMap = L.map("map", {
  center: [31.2500, -99.7500],
  zoom: 5.5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store the API query variables.
// For docs, refer to https://dev.socrata.com/docs/queries/where.html.
// And, refer to https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9.

// COMMENT THIS OUT FOR NOW
// let baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// let date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// let complaint = "&complaint_type=Rodent";
// let limit = "&$limit=10000";

// // Assemble the API query URL.
// let url = baseURL + date + complaint + limit;
// console.log(url);

// INSTEAD OF USING URL TRY TO LOAD IN .JSON VIA FETCH. 
// fetch('../../Resources/cleaned.json')
//     .then(response => response.json())
//     .then(data => {
//       // Handle the parsed JSON data here
//               console.log(data);
//     })

//     .catch(error => console.error('Error fetching JSON:', error));






fetch('../../Resources/final_cleaned_missing.json')
.then(response => response.json())
.then(data => {
  // Access the data and use it in your JavaScript code
  console.log('Name:', data.Name);
  console.log('Missing_Since:', data.Missing_Since);
  console.log('Missing_Location:', data.Missing_Location);
  console.log('Classification:', data.Classification);
  console.log('Sex:', data.Sex);
  console.log('Race', data.Race);
  console.log('DoB:', data.DoB);
  console.log('Missing_Age:', data.Missing_Age);
  console.log('Current_Age:', data.Current_Age);
  console.log('Height:', data.Height);
  console.log('Weight:', data.Weight);
  console.log('Latitude:', data.Latitude);
  console.log('Longitude:', data.Longitude);

  // You can perform further operations with the data here
})
.catch(error => console.error('Error fetching JSON:', error));













// Get the data with d3.
d3.json(data).then(function(response) {

  // Create a new marker cluster group.
  let markers = L.markerClusterGroup();

  // Loop through the data.
  for (let i = 0; i < response.data; i++) {

    // Set the data location property to a variable.
    let location = response[i].location;

    // Check for the location property.
    if (location) {

      // Add a new marker to the cluster group, and bind a popup.
      let missing_marker = L.marker([location.Latitude, location.Longitude]).bindPopup(response[i].Missing_Location);
      markers.addLayer(missing_marker);
    }

  }

  // Add our marker cluster layer to the map.
  myMap.addLayer(markers);

});
