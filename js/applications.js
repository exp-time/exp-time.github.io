
function createWebTerminal() { // Web Terminal
  const terminal = new Elem({tag: 'div', attrs: {id: 'terminal',className: 'terminal'}});
  terminal.addChild({tag: 'div', attrs: {id: 'output',className: 'output'}});
  terminal.addChild({tag: 'input',
      attrs: {type: 'text', id: 'input', className: 'input', placeholder: 'Type command...'}});
  return terminal.elem;
}

document.addEventListener('DOMContentLoaded', function() { // TERMINAL
  const inputField = document.getElementById('input');
  const outputDiv = document.getElementById('output');
  inputField.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          const input = this.value;
          this.value = ''; // clear input field
          const result = handleCommand(input.trim());
          if (result) {
              outputDiv.innerHTML += `<div>> ${input}</div>`;
              outputDiv.innerHTML += `<div>${result}</div>`;
          } else {
              outputDiv.innerHTML += `<div>> ${input}</div>`;
              outputDiv.innerHTML += `<div>Unknown command: ${input}</div>`;
          }
          outputDiv.scrollTop = outputDiv.scrollHeight; // scroll to the bottom
      }
  });
});

function handleCommand(command) { // Terminal commands
  switch(command.toLowerCase()) {
      case "help":
          return "List of commands:<br>- help: Display this help message<br>- clear: Clear the terminal output<br>- test: Test the terminal output";
      case "clear":
          document.getElementById('output').innerHTML = '';
          return "Output cleared.";
      case "test":
          return "Testing";
      default:
          return null;
  }
}

defaultHeader = ["Name", "Age", "Job", "Location"], 

defaultRows = [
  ["John Doe", "28", "Developer", "New York"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"],
  ["Jane Doe", "34", "Designer", "San Francisco"]
]
// EXCEL
function createEditableTable(headers = defaultHeader, initialRowsData = defaultRows) {
  const tableContainer = new Elem({tag: 'div', attrs: {id: 'table-container',className: 'table-container'}});
  const table = tableContainer.addChild({tag: 'table', attrs: {id: 'data-table'}});
  const thead = table.addChild({tag: 'thead'});

  const headerRow = thead.addChild({tag: 'tr'});
  headers.forEach(header => {headerRow.addChild({tag: 'th', attrs: {textContent: header}})});

  const tbody = table.addChild({tag: 'tbody'});
  initialRowsData.forEach(rowData => {
    const row = tbody.addChild({tag: 'tr'});
    rowData.forEach(cellData => { // Optionally handle data change
      const cell = row.addChild({tag: 'td'}); 
      cell.addChild({tag: 'input', attrs: {type: 'text',value: cellData,
        className: 'editable-cell', onchange: 'saveCellData(this)' }     
      });
    });
  });
  return tableContainer.elem;
}

function saveCellData(inputElement) {
  console.log('Data changed in cell:', inputElement.value);
  // Additional logic to save or process new cell data
}

// MAP 
function createMap(id) {
  return new Elem({tag: 'div', attrs:{id: id,className: 'map'}}).elem;
}

function createMapDataNew(id) {
  const container = new Elem({tag: 'div', attrs: {className: 'map-data-listing'}});
  
  const routingServiceSelector = new Elem({
    tag: 'div', attrs: {className: 'input-group', onchange: function() {updateAdditionalFields()}}, children: [
      {tag: 'label', attrs: {for: 'routingServiceType', className: 'font-large', textContent: 'Routing service:'}},
      {tag: 'select', attrs: {name: 'routingService', id: 'routingServiceType', className: 'no-spinners pointer-cursor'}, children: [
        {tag: 'option', attrs: {value: '', textContent: ''}},
        {tag: 'option', attrs: {value: 'OpenRouteService', textContent: 'OpenRouteService'}},
        {tag: 'option', attrs: {value: 'Azure', textContent: 'Azure Maps'}},
        {tag: 'option', attrs: {value: 'Google', textContent: 'Google Maps'}},
        {tag: 'option', attrs: {value: 'GraphHopper', textContent: 'GraphHopper'}},
        {tag: 'option', attrs: {value: 'Mapbox', textContent: 'Mapbox'}}
      ]}
    ],
  }).appendTo(container.elem);

  const vehicleSelector = new Elem({
    tag: 'div', attrs: {className: 'input-group', onchange: function() {toggleVehicleSpecificFields()}}, children: [
      {tag: 'label', attrs: {for: 'vehicleType', className: 'font-large', textContent: 'Vehicle:'}},
      {tag: 'select', attrs: {name: 'vehicle', id: 'vehicleType', className: 'no-spinners pointer-cursor'}, children: [
        {tag: 'option', attrs: {value: '', textContent: ''}},
        {tag: 'option', attrs: {value: 'car', textContent: 'Car'}},
        {tag: 'option', attrs: {value: 'truck', textContent: 'Truck'}},
        {tag: 'option', attrs: {value: 'bicycle', textContent: 'Bicycle'}},
        {tag: 'option', attrs: {value: 'walk', textContent: 'Walk'}}
      ]}
    ],
  });

  const routingTypeSelector = new Elem({
    tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'routingType', className: 'font-large', textContent: 'Routing type:'}},
      {tag: 'select', attrs: {name: 'routing', id: 'routingType', className: 'no-spinners pointer-cursor'}, children: [
        {tag: 'option', attrs: {value: '', textContent: ''}},
        {tag: 'option', attrs: {value: 'cost', textContent: 'Cost'}},
        {tag: 'option', attrs: {value: 'shortest', textContent: 'Shortest'}},
        {tag: 'option', attrs: {value: 'emissions', textContent: 'Emissions'}}
      ]}
    ],
  });

  const vehicleWeight = new Elem({tag: 'div', attrs: {className: 'input-group'}, children: [
    {tag: 'label', attrs: {for: 'vehicleWeight', className: 'font-large', textContent: 'Weight (kg):'}},
    {tag: 'input', attrs: {type: 'number', id: 'vehicleWeight', name: 'weight', className: 'no-spinners', placeholder: 'Enter weight'}}
  ]});
  const vehicleLength = new Elem({tag: 'div', attrs: {className: 'input-group'}, children: [
    {tag: 'label', attrs: {for: 'vehicleLength', className: 'font-large', textContent: 'Length (m):'}},
    {tag: 'input', attrs: {type: 'number', id: 'vehicleLength', name: 'length', className: 'no-spinners', placeholder: 'Enter length'}}
  ]});
  const vehicleWidth = new Elem({tag: 'div', attrs: {className: 'input-group'}, children: [
    {tag: 'label', attrs: {for: 'vehicleWidth', className: 'font-large', textContent: 'Width (m):'}},
    {tag: 'input', attrs: {type: 'number', id: 'vehicleWidth', name: 'width', className: 'no-spinners', placeholder: 'Enter width'}}
  ]});
  const vehicleHeight = new Elem({tag: 'div', attrs: {className: 'input-group'}, children: [
    {tag: 'label', attrs: {for: 'vehicleHeight', className: 'font-large', textContent: 'Height (m):'}},
    {tag: 'input', attrs: {type: 'number', id: 'vehicleHeight', name: 'height', className: 'no-spinners', placeholder: 'Enter height'}}
  ]});

  const dynamicFieldsContainer = new Elem({tag: 'div', attrs: {id: 'dynamicFieldsContainer'}}).appendTo(container.elem).elem;
  const dynamicFieldsContainerTwo = new Elem({tag: 'div', attrs: {id: 'dynamicFieldsContainerTwo'}}).appendTo(container.elem).elem;
  new Elem({tag: 'div', attrs: {id: "DataContainer" + id, className: 'w3-padding'}}).appendTo(container.elem);

  function updateAdditionalFields() {
    const inputs = document.querySelectorAll('.input-group select, .input-group input');
    inputs.forEach(input => {
      if (input.id != 'routingServiceType') {
        if (input.tagName.toLowerCase() === 'select') {
          input.selectedIndex = 0; // Select the first option
        } else {
          input.value = ''; // Clear the input field
        }
      }
    });
    dynamicFieldsContainer.innerHTML = '';
    dynamicFieldsContainerTwo.innerHTML = '';
    const routingServiceTypeValue = document.getElementById('routingServiceType').value;
    if (routingServiceTypeValue === 'OpenRouteService') {
      vehicleSelector.appendTo(dynamicFieldsContainer);
    }
    else if (routingServiceTypeValue === 'Azure'){
      routingTypeSelector.appendTo(dynamicFieldsContainer);
      vehicleSelector.appendTo(dynamicFieldsContainer);
    }
    else if (routingServiceTypeValue === 'Google'){
      routingTypeSelector.appendTo(dynamicFieldsContainer);
      vehicleSelector.appendTo(dynamicFieldsContainer);
    }
    else if (routingServiceTypeValue === 'GraphHopper'){

    }
    else if (routingServiceTypeValue === 'Mapbox'){

    }
  }
  // TODO: does not update on other selections!
  function toggleVehicleSpecificFields() {
    dynamicFieldsContainerTwo.innerHTML = '';
    const vehicleTypeValue = document.getElementById('vehicleType').value;
    const routingServiceTypeValue = document.getElementById('routingServiceType').value;
    if (vehicleTypeValue === 'truck' && routingServiceTypeValue === 'Azure') {
      vehicleWeight.appendTo(dynamicFieldsContainerTwo);
      vehicleLength.appendTo(dynamicFieldsContainerTwo);
      vehicleWidth.appendTo(dynamicFieldsContainerTwo);
      vehicleHeight.appendTo(dynamicFieldsContainerTwo);
    }
  }
  return container.elem;
}

function createWeatherMapData(id) {
  return new Elem({tag: 'div',attrs: {className: 'map-data-listing'},children: [
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleHeight', className: 'font-large', textContent: 'Speed (km/h):'}},
      {tag: 'input', attrs: {type: 'number', id: 'vehicleSpeed', name: 'Speed', className: 'no-spinners', placeholder: 'Enter Speed'}}
    ]},
    {tag: 'div', attrs: {id: "DataContainer" + id, className: 'w3-padding'}}
  ]}).elem;
}

let markers = {};
let polylines = {};

function initializeMap(id, maxCount) {
  markers[id] = []
  if (typeof L !== 'undefined') {
    const map = L.map(id).setView([52.52, 13.40], 5); // Sets view to coordinates (latitude, longitude) and a zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Add OpenStreetMap tiles to the map
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.on('click', function(e) { addMarker(e.latlng, map, id, maxCount)}); // Event listener for map clicks
  }else {console.error('Leaflet library is not loaded.')}
}

// marker color https://stackoverflow.com/questions/23567203/leaflet-changing-marker-color

function addMarker(latlng, map, id, maxCount) {
  var locationIcon = L.icon({
    iconUrl: 'img/mapIcons/locBlue.png',
    iconSize: [50, 50],
    iconAnchor: [25, 48],
    //popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
  });

  var shippingIcon = L.icon({
    iconUrl: 'img/mapIcons/sendTemp.png',
    iconSize: [50, 50],
    iconAnchor: [45, 21],
    //popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
  });

  if (markers[id].length >= maxCount && id === 'map-one') { return }
  else if ( markers[id].length >= maxCount && id === 'map-two') {
    map.removeLayer(markers[id].shift()) // Remove the oldest marker from the array
  }
  if (markers[id].length % 2 === 0) {
    markers[id].push(L.marker(latlng, {icon: shippingIcon}).addTo(map)); 
  } else {
    markers[id].push(L.marker(latlng, {icon: locationIcon}).addTo(map));
  }
  updateDisplay(id, map)
}

const apiKey = '5b3ce3597851110001cf6248c8bd0ca0e5e947639f269aa502fc6e8a';

function updateDisplay(id, map) {
  const mapDataContainer = document.getElementById("DataContainer" + id);
  mapDataContainer.innerHTML = ''; // Clear existing data
  markers[id].forEach((marker, index) => {// Iterate through all markers and create a paragraph for each
    const coords = marker.getLatLng(); // Get the latitude and longitude of the marker
    const coordText = `Marker ${index + 1}: Lat: ${coords.lat.toFixed(2)}, Lon: ${coords.lng.toFixed(2)}`;
    new Elem({tag: 'p', parent: mapDataContainer, attrs:{textContent: coordText}}).elem;
  });

  if (id === "map-one" && markers[id].length >= 6) {
    for (let i = 0; i < markers[id].length; i++) {
      for (let j = i + 1; j < markers[id].length; j++) {
        const startCoords = [markers[id][i].getLatLng().lat, markers[id][i].getLatLng().lng];
        const endCoords = [markers[id][j].getLatLng().lat, markers[id][j].getLatLng().lng];
        fetchAndDrawRoute(startCoords, endCoords, apiKey, map, function () {
          updateWeatherIconsOnRoute(map);
        });
      }
    }
  }

  if (id === "map-two" && markers[id].length >= 2) { 
    if (polylines[id]) {map.removeLayer(polylines[id])}
    var latLngs = markers[id].map(marker => marker.getLatLng());
    var polyline = new L.Polyline(latLngs, {
      color: 'red',      // Line color
      weight: 4,         // Line weight in pixels
      opacity: 0.5,      // Line opacity
      smoothFactor: 1    // How smoothly the line curves
    }); 
    polyline.addTo(map);
    polylines[id] = polyline;
    updateIconsOnMap(id, map)
  }

  /*
  if (id === "map-two" && markers[id].length >= 2) { 
    const startCoords = [markers[id][0].getLatLng().lat, markers[id][0].getLatLng().lng];
    const endCoords = [markers[id][1].getLatLng().lat, markers[id][1].getLatLng().lng];
    fetchAndDrawRoute(startCoords, endCoords, apiKey, map, function() {
      updateIconsOnMap(id, map);
    });
  }
  */

}

function fetchAndDrawRoute(startCoords, endCoords, apiKey, map, callback) {
  // Construct the URL for the OpenRouteService API
  const url = new URL('https://api.openrouteservice.org/v2/directions/driving-hgv');
  url.search = new URLSearchParams({
    api_key: apiKey,
    start: `${startCoords[1]},${startCoords[0]}`, // Ensure coordinates are in "longitude,latitude" format
    end: `${endCoords[1]},${endCoords[0]}`
  });
  fetch(url)
    .then(response => response.json()).then(data => {
      const routeFeature = data.features[0];
      window.geojsonLayer = L.geoJSON(routeFeature, { // Add the route to the map 
        style: {
          color: '#FF0000', // Red line for the route
          weight: 5,
          opacity: 0.7
        }}).addTo(map);
        if (callback) {
          callback(map); // Trigger the callback after the route is drawn
        }
      }).catch(error => console.error('Error fetching or drawing the route:', error));
}

let iconsList = [];
let iconMarkers = [];

function fetchIcons() { // Array of icon filenames
  fetch('img/weatherIcons/icons.json')
    .then(response => response.json())
      .then(icons => {iconsList = icons; })
        .catch(error => console.error('Error loading icons:', error));
}

const api_key_w = "FMADJVAQCCA4576T9MQUYE7NG"

function updateIconsOnMap(id, map) {
  const speedInput = document.getElementById('vehicleSpeed');
  const speed = parseInt(speedInput.value, 10); // Speed in km/h
  if (isNaN(speed) || speed <= 20) {
    console.error('Invalid speed value.');
    return;
  }

  if (!iconsList.length) {
    console.error('No icons available.');
    return;
  }

  if (!polylines[id]) {
    console.error('No polyline found for this map.');
    return;
  }

  const lineLength = L.GeometryUtil.length(polylines[id]); // Length in meters
  const numberOfIcons = Math.floor((lineLength / 1000) / speed);

  if (iconMarkers) {
    iconMarkers.forEach(marker => map.removeLayer(marker));
    iconMarkers = [];
  }
  for (let i = 0; i < numberOfIcons; i++) {
    const position = i  * (lineLength / numberOfIcons);
    const point = L.GeometryUtil.interpolateOnLine(map, polylines[id].getLatLngs(), position / lineLength);
    if (!point) continue; // Skip if no point is returned 
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${point.latLng.lat},${point.latLng.lng}?key=${api_key_w}`
    fetch(url).then(response => response.json()).then(data => {
      const iconUrl = `img/weatherIcons/${data.currentConditions.icon}.svg`;
      const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: [20, 20]
      });
      const marker = L.marker(point.latLng, {icon: icon}).addTo(map);
      iconMarkers.push(marker);
    }).catch(error => console.error('Error fetching weather', error));
  }
}

function updateWeatherIconsOnRoute(map) {
  if (!geojsonLayer) {
    console.error('No route found.');
    return;
  }

  const routeCoordinates = geojsonLayer.getLayers()[0].feature.geometry.coordinates.map(coord => L.latLng(coord[1], coord[0]));
  const totalDistance = routeCoordinates.reduce((acc, cur, idx, arr) => {
    if (idx === 0) return 0;
    return acc + arr[idx - 1].distanceTo(cur);
  }, 0);
  const numberOfPoints = Math.floor(totalDistance / 100000); // Points every 100 km

  if (iconMarkers) {
    iconMarkers.forEach(marker => map.removeLayer(marker));
    iconMarkers = [];
  }

  let distanceCovered = 0;
  for (let i = 1; i < routeCoordinates.length; i++) {
    const segmentDistance = routeCoordinates[i - 1].distanceTo(routeCoordinates[i]);
    distanceCovered += segmentDistance;
    if (distanceCovered >= 100000) {
      fetchWeatherAndPlaceIcon(routeCoordinates[i], map);
      distanceCovered = 0; // Reset distance covered for next 100 km segment
    }
  }
}

function fetchWeatherAndPlaceIcon(latLng, map) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latLng.lat},${latLng.lng}?key=${api_key_w}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const iconUrl = `img/weatherIcons/${data.currentConditions.icon}.svg`;
      const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: [25, 25]
      });
      const marker = L.marker(latLng, { icon: icon }).addTo(map);
      iconMarkers.push(marker);
    })
    .catch(error => console.error('Error fetching weather', error));
}
document.addEventListener('DOMContentLoaded', fetchIcons()); // Load icons on page load


// https://icons8.com/icons/set/logistic--black

