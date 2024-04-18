function createWebTerminal() {
  const terminal = document.createElement('div');
  terminal.setAttribute('id', 'terminal');
  terminal.className = 'terminal';

  const output = document.createElement('div');
  output.setAttribute('id', 'output');
  output.className = 'output';

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'input');
  input.className = 'input';
  input.setAttribute('placeholder', 'Type command...');
  terminal.append(output, input);

  return terminal
}
document.addEventListener('DOMContentLoaded', function() {
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

function handleCommand(command) {
  switch(command.toLowerCase()) {
      case "help":
          return "List of commands:<br>- help: Display this help message<br>- clear: Clear the terminal output<br>- test: Test the terminal output";
      case "clear":
          document.getElementById('output').innerHTML = '';
          return "Output cleared.";
      case "test":
          return "Testing<br>";
      default:
          return null;  // Indicates unknown command
  }
}
