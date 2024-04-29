
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

function createMapData() {
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
          {tag: 'option', attrs: {value: 'truck', textContent: 'Truck'}}
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
    {tag: 'div', attrs: {id: "mapDataContainer", className: 'w3-padding'}}
  ]}).elem;
}

function createWeatherMapData() {
  return new Elem({tag: 'div',attrs: {className: 'map-data-listing'},children: [
    {tag: 'div', attrs: {className: 'input-group'}, children: [
      {tag: 'label', attrs: {for: 'vehicleHeight', className: 'font-large', textContent: 'Speed (km/h):'}},
      {tag: 'input', attrs: {type: 'number', id: 'vehicleSpeed', name: 'Speed', className: 'no-spinners', placeholder: 'Enter Speed'}}
    ]},
    {tag: 'div', attrs: {id: "mapWeatherDataContainer", className: 'w3-padding'}}
  ]}).elem;
}

let markers = {};

function initializeMap(id) {
  markers[id] = []
  if (typeof L !== 'undefined') {
    const map = L.map(id).setView([52.52, 13.40], 6); // Sets view to coordinates (latitude, longitude) and a zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Add OpenStreetMap tiles to the map
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.on('click', function(e) { addMarker(e.latlng, map, id, markers[id])}); // Event listener for map clicks
  }else {console.error('Leaflet library is not loaded.')}
}

function addMarker(latlng, map, id, markers) {
  if (id === "map-one") {
    if (markers.length >= 2) {
      const oldestMarker = markers.shift(); // Remove the oldest marker from the array
      map.removeLayer(oldestMarker); // Remove the oldest marker from the map
    }
    const marker = L.marker(latlng).addTo(map);
    markers.push(marker); // Add the new marker to the array
    updateDisplay('mapDataContainer'); // Update the display of coordinates
  }
}

function updateDisplay(container) {
  const mapDataContainer = document.getElementById(container);
  mapDataContainer.innerHTML = ''; // Clear existing data
  markers.forEach((marker, index) => {// Iterate through all markers and create a paragraph for each
    const coords = marker.getLatLng(); // Get the latitude and longitude of the marker
    const p = document.createElement('p'); // Create a new paragraph element
    p.textContent = `Marker ${index + 1}: Lat: ${coords.lat.toFixed(2)}, Lon: ${coords.lng.toFixed(2)}`; // Set the text content of the paragraph
    mapDataContainer.appendChild(p); // Append the paragraph to the container
  });
}
