
function createWebTerminal() { // Web Terminal
  const terminal = new Elem('div').setAttr({id: 'terminal',className: 'terminal'});
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

// EXCEL
function createEditableTable(headers, initialRowsData) {
  const tableContainer = new Elem('div', {id: 'table-container',className: 'table-container'});
  const table = tableContainer.addChild({tag: 'table', attrs: {id: 'data-table'}});
  const thead = table.addChild({tag: 'thead'});
  const headerRow = thead.addChild({tag: 'tr'});
  headers.forEach(header => {
      headerRow.addChild({tag: 'th', attrs: {textContent: header}});
  });
  const tbody = table.addChild({tag: 'tbody'});
  initialRowsData.forEach(rowData => {
      const row = tbody.addChild({tag: 'tr'});
      rowData.forEach(cellData => {
          const cell = row.addChild({tag: 'td'});
          cell.addChild({
              tag: 'input',
              attrs: {
                  type: 'text',
                  value: cellData,
                  className: 'editable-cell',
                  onchange: 'saveCellData(this)' // Optionally handle data change
              }
          });
      });
  });

  tableContainer.appendTo(document.body);
  return tableContainer.elem;
}

function saveCellData(inputElement) {
  console.log('Data changed in cell:', inputElement.value);
  // Additional logic to save or process new cell data
}


// MAP 
function createMap() {
  const map = new Elem('div').setAttr({id: 'map',className: 'map'});
  return map.elem
}

let markers = [];

function initializeMap() {
  if (typeof L !== 'undefined') {
    const map = L.map('map').setView([52.52, 13.40], 6); // Sets view to coordinates (latitude, longitude) and a zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Add OpenStreetMap tiles to the map
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    map.on('click', function(e) { // Event listener for map clicks
      addMarker(e.latlng, map);
    });

  }else {console.error('Leaflet library is not loaded.')}
}

function addMarker(latlng, map) {
  if (markers.length >= 2) {
    const oldestMarker = markers.shift(); // Remove the oldest marker from the array
    map.removeLayer(oldestMarker); // Remove the oldest marker from the map
  }
  const marker = L.marker(latlng).addTo(map);
  markers.push(marker); // Add the new marker to the array
  updateDisplay(); // Update the display of coordinates
}

function updateDisplay() {
  const mapDataContainer = document.getElementById('mapDataContainer');
  mapDataContainer.innerHTML = ''; // Clear existing data
  mapDataContainer.appendChild(displayMapData()); // Append new data
}

function displayMapData() {
  const container = document.createElement('div'); // Container for the paragraphs
  markers.forEach((marker, index) => {// Iterate through all markers and create a paragraph for each
      const coords = marker.getLatLng(); // Get the latitude and longitude of the marker
      const p = document.createElement('p'); // Create a new paragraph element
      p.textContent = `Marker ${index + 1}: Latitude = ${coords.lat.toFixed(2)}, Longitude = ${coords.lng.toFixed(2)}`; // Set the text content of the paragraph
      container.appendChild(p); // Append the paragraph to the container
  });
  return container; // Return the container with all paragraphs
}