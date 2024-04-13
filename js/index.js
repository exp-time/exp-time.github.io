
function info_open(id, top) {
  var x = document.getElementById(id);
  x.style.fontSize = "20px";
  if (top) {
    x.style.paddingTop = "0%";
  }
  x.style.display = "block";
}

// Closing modals

function info_close(id) {
  document.getElementById(id).style.display = "none";
}

function closeModal(event, id) {
  // Check if the click was directly on the modal background
  if (event.target.classList.contains('w3-modal')) {
      document.getElementById(id).style.display = 'none';
  }
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}
  
// pagination
document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content'); 
  const itemsPerPage = 1; // set number of items per page
  let currentPage = 0;
  const items = Array.from(content.getElementsByTagName('section')).slice(0); // tag name set to section and slice set to 0

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }

  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');
    // Add page buttons
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });
      content.appendChild(paginationContainer);
      paginationDiv.appendChild(pageButton);
    }
  }

  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  createPageButtons(); // Call this function to create the page buttons initially
  showPage(currentPage);
});

// Get html elements from another file
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

// Create main content cards
function createCard(id, title, iconClass, content) {
  // Card Vars
  var card = document.createElement('div');
  var row = document.createElement('div');
  var dummyButton = document.createElement('div');
  var titleDiv = document.createElement('div');
  var infoIcon = document.createElement('a');
  var paragraph = document.createElement('p');
  var selectedIcon = document.createElement('i');

  // Content
  card.className = 'w3-card w3-container';
  row.className = 'w3-row w3-row-padding w3-xlarge container-title flex-container';
  dummyButton.className = 'dummy-button';
  titleDiv.className = "title";
  titleDiv.textContent = title;
  infoIcon.onclick = function() { info_open('first_info'); }; 
  infoIcon.className = 'fa fa-info w3-button top-corner';


  paragraph.textContent = content;
  selectedIcon.className = iconClass + ' w3-margin-bottom w3-text-theme';

  row.append(dummyButton, titleDiv, infoIcon);
  card.append(row, selectedIcon, paragraph);
  document.getElementById(id).appendChild(card);
}