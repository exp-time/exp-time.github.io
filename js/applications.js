
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
  if (typeof L !== 'undefined') {
    const map = L.map('map').setView([51.505, -0.09], 13); // Sets view to coordinates (latitude, longitude) and a zoom level
    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    } else {console.error('Leaflet library is not loaded.')}
  return map.elem
}

