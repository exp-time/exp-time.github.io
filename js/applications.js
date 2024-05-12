
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

function createMapData(id) {
  return new Elem({tag: 'div',attrs: {className: 'map-data-listing'},children: [
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'routingType', className: 'font-large', textContent: 'Routing service:'}},
      {tag: 'select', attrs: {name: 'routing', id: 'routingType', className: 'no-spinners pointer-cursor'}, children: [
          {tag: 'option', attrs: {value: 'OpenRouteService', textContent: 'OpenRouteService'}},
          {tag: 'option', attrs: {value: 'Azure', textContent: 'Azure Maps'}},
          {tag: 'option', attrs: {value: 'Google', textContent: 'Google Maps'}},
          {tag: 'option', attrs: {value: 'GraphHopper', textContent: 'GraphHopper'}},
          {tag: 'option', attrs: {value: 'Mapbox', textContent: 'Mapbox'}}
      ]}
    ]},
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleType', className: 'font-large', textContent: 'Vehicle:'}},
      {tag: 'select', attrs: {name: 'vehicle', id: 'vehicleType', className: 'no-spinners pointer-cursor'}, children: [
          {tag: 'option', attrs: {value: 'car', textContent: 'Car'}},
          {tag: 'option', attrs: {value: 'truck', textContent: 'Truck'}},
          {tag: 'option', attrs: {value: 'bicycle', textContent: 'Bicycle'}},
          {tag: 'option', attrs: {value: 'walk', textContent: 'Walk'}}
      ]}
    ]},
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'optimizationType', className: 'font-large', textContent: 'Optimization:'}},
      {tag: 'select', attrs: {name: 'optimization', id: 'optimizationType', className: 'no-spinners pointer-cursor'}, children: [
          {tag: 'option', attrs: {value: 'cost', textContent: 'Cost'}},
          {tag: 'option', attrs: {value: 'shortest', textContent: 'Shortest'}},
          {tag: 'option', attrs: {value: 'emissions', textContent: 'Emissions'}}
      ]}
    ]},
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleWeight', className: 'font-large', textContent: 'Weight (kg):'}},
      {tag: 'input', attrs: {type: 'number', id: 'vehicleWeight', name: 'weight', className: 'no-spinners', placeholder: 'Enter weight'}}
    ]},
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleLength', className: 'font-large', textContent: 'Length (m):'}},
      {tag: 'input', attrs: {type: 'number', id: 'vehicleLength', name: 'length', className: 'no-spinners', placeholder: 'Enter length'}}
    ]},
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleWidth', className: 'font-large', textContent: 'Width (m):'}},
      {tag: 'input', attrs: {type: 'number', id: 'vehicleWidth', name: 'width', className: 'no-spinners', placeholder: 'Enter width'}}
    ]},
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleHeight', className: 'font-large', textContent: 'Height (m):'}},
      {tag: 'input', attrs: {type: 'number', id: 'vehicleHeight', name: 'height', className: 'no-spinners', placeholder: 'Enter height'}}
    ]},
    {tag: 'div', attrs: {id: "DataContainer" + id, className: 'w3-padding'}}
  ]}).elem;
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

function initializeMap(id) {
  markers[id] = []
  if (typeof L !== 'undefined') {
    const map = L.map(id).setView([52.52, 13.40], 5); // Sets view to coordinates (latitude, longitude) and a zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Add OpenStreetMap tiles to the map
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.on('click', function(e) { addMarker(e.latlng, map, id)}); // Event listener for map clicks
  }else {console.error('Leaflet library is not loaded.')}
}

function addMarker(latlng, map, id) {
  if (markers[id].length >= 2) { map.removeLayer(markers[id].shift()) } // Remove the oldest marker from the array
  markers[id].push(L.marker(latlng).addTo(map));                    // Add the new marker to the array
  if (id === "map-one") { updateDisplay(id) }
  else { updateDisplay(id, map) }
}

function updateDisplay(id, map) {
  const mapDataContainer = document.getElementById("DataContainer" + id);
  mapDataContainer.innerHTML = ''; // Clear existing data
  markers[id].forEach((marker, index) => {// Iterate through all markers and create a paragraph for each
    const coords = marker.getLatLng(); // Get the latitude and longitude of the marker
    const coordText = `Marker ${index + 1}: Lat: ${coords.lat.toFixed(2)}, Lon: ${coords.lng.toFixed(2)}`;
    new Elem({tag: 'p', parent: mapDataContainer, attrs:{textContent: coordText}}).elem;
  });
  if (polylines[id]) {
    map.removeLayer(polylines[id]);
    polylines[id] = null;
  }

  if (id === "map-two" && markers[id].length >= 2) { 
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
}

let iconsList = [];
let iconMarkers = [];

function fetchIcons() { // Array of icon filenames
  fetch('img/weatherIcons/icons.json')
    .then(response => response.json())
      .then(icons => {iconsList = icons; })
        .catch(error => console.error('Error loading icons:', error));
}

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

  // Clear previous icons
  if (iconMarkers) {
    iconMarkers.forEach(marker => map.removeLayer(marker));
    iconMarkers = [];
  }

  for (let i = 1; i <= numberOfIcons; i++) {
    const position = i * (lineLength / numberOfIcons);
    const point = L.GeometryUtil.interpolateOnLine(map, polylines[id].getLatLngs(), position / lineLength);
    const iconIndex = Math.floor(Math.random() * iconsList.length);
    const iconUrl = `img/weatherIcons/${iconsList[iconIndex]}`;
    const icon = L.icon({
      iconUrl: iconUrl,
      iconSize: [30, 30]
    });
    const marker = L.marker(point.latLng, {icon: icon}).addTo(map);
    iconMarkers.push(marker);
  }
}

document.addEventListener('DOMContentLoaded', fetchIcons()); // Load icons on page load
