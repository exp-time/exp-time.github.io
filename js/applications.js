function createWebTerminal() {
  const terminal = new Elem('div').setAttr({id: 'terminal',className: 'terminal'});
  terminal.addChild({tag: 'div', attrs: {id: 'output',className: 'output'}});
  terminal.addChild({tag: 'input',
      attrs: {type: 'text', id: 'input',className: 'input', placeholder: 'Type command...'}});
  return terminal.elem;
}

document.addEventListener('DOMContentLoaded', function() {
  // TERMINAL
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
  // Jexcel
  jexcel(document.getElementById('spreadsheet'), {
    data:[
        ['Mazda', 2001, 2000, 'Black', 'Buy'],
        ['Peugeot', 2010, 5000, 'Blue', 'Rent'],
        ['Honda Fit', 2009, 3000, 'Blue', 'Buy'],
        ['Honda CRV', 2010, 6000, 'Gray', 'Sell'],
    ],
    columns: [
        { type: 'text', title:'Car', width:120 },
        { type: 'numeric', title:'Year', width:80 },
        { type: 'numeric', title:'Price', width:100 },
        { type: 'text', title:'Color', width:100 },
        { type: 'dropdown', title:'Condition', width:100, source:['Buy', 'Sell', 'Rent'] }
    ]
  });
});

function handleCommand(command) {
  switch(command.toLowerCase()) {
      case "help":
          return "List of commands:<br>- help: Display this help message<br>- clear: Clear the terminal output<br>- test: Test the terminal output";
      case "clear":
          document.getElementById('output').innerHTML = '';
          return "Output cleared.";
      case "test":
          return "Testing";
      default:
          return null;  // Indicates unknown command
  }
}

function createWebExcel() {

}