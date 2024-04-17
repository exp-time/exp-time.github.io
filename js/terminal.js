

function createWebTerminal() {
  const terminal = document.createElement('div');
  terminal.setAttribute('id', 'terminal');
  terminal.className = 'terminal';

  const output = document.createElement('div'); // Create the output area
  output.setAttribute('id', 'output');
  output.className = 'output';

  const input = document.createElement('input'); // Create the input field
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'input');
  input.className = 'input';
  input.setAttribute('placeholder', 'Type command...');

  terminal.append(output, input);

  return terminal
}

function handleCommand(command) {
  let output = document.getElementById('output');
  switch(command.toLowerCase()) {
      case "help":
          output.innerHTML += `<div>> ${command}</div>`;
          output.innerHTML += `<div>List of commands:</div>`;
          output.innerHTML += `<div>- help: Display this help message</div>`;
          output.innerHTML += `<div>- clear: Clear the terminal output</div>`;
          return true;
      case "clear":
          output.innerHTML = '';
          return true;
      default:
          return false;
  }
}