
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

// Close if click outside of modal
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
  let currentPage = 0;
  const sections = Array.from(content.getElementsByTagName('section'));

  function getCurrentItemsPerPage() {
    const width = window.innerWidth;
    if (width < 1100) {
      return 6;  // 6 items when 1 per row
    } else if (width >= 1100 && width < 1650) {
      return 4;  // 4 items when 2 per row
    } else {
      return 6;  // 6 items when 3 per row
    }
  }

  function showPage(page) {
    const itemsPerPage = getCurrentItemsPerPage();
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    sections.forEach((section, index) => {
      section.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });
    updateActiveButtonStates();
  }

  function createPageButtons() {
    const itemsPerPage = getCurrentItemsPerPage();
    const totalPages = Math.ceil(sections.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';
    document.body.appendChild(paginationContainer);

    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', function() {
        currentPage = i;
        showPage(currentPage);
      });
      paginationContainer.appendChild(pageButton);
    }
    updateActiveButtonStates();
  }

  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      button.className = (index === currentPage) ? 'active' : '';
    });
  }

  createPageButtons(); // Initial setup
  showPage(currentPage); // Show initial page

  // Update layout and pagination if window is resized
  window.addEventListener('resize', function() {
    createPageButtons();
    showPage(currentPage);
  });
});

/*
// Get html elements from another file
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      // Make an HTTP request using the attribute value as the file name:
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          // Remove the attribute, and call this function once more: 
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
*/

// Create main content cards
function createCard(id, info_id, title, iconClass, content, info_Title, info_Content) {
  var container = document.getElementById(id);
  if (!container) {
    console.error('Failed to create card: Element with ID "' + id + '" not found.');
    return; // Safety check to ensure the container exists
  } 

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
  infoIcon.className = 'fa fa-info w3-button top-corner';

  paragraph.textContent = content;
  selectedIcon.className = iconClass + ' w3-margin-bottom w3-text-theme';

  createModal(info_id, info_Title, info_Content)

  infoIcon.onclick = function() { info_open(info_id); }; 
  row.append(dummyButton, titleDiv, infoIcon);
  card.append(row, selectedIcon, paragraph);
  container.appendChild(card);
  
}

// Info Popup modals
function createModal(info_id, info_Title, info_Content) {
  var modal = document.createElement('div');
  modal.setAttribute('id', info_id);
  modal.className = 'w3-modal';
  modal.setAttribute('onmousedown', 'closeModal(event, "' + info_id + '")');

  var modalContent = document.createElement('div');
  modalContent.className = 'w3-modal-content w3-card-4 w3-animate-top';

  var header = document.createElement('header');
  header.className = 'w3-theme-l1 modal-header';
  
  var closeButton = document.createElement('span');
  closeButton.className = 'w3-button w3-display-topright';
  closeButton.setAttribute('onclick', 'info_close("' + info_id + '")');
  closeButton.textContent = 'x';

  var headerP = document.createElement('p');
  headerP.textContent = info_Title;
  header.append(headerP, closeButton);

  var body = document.createElement('div');
  body.className = 'w3-padding';

  var paragraph = document.createElement('p');
  paragraph.textContent = info_Content;

  body.appendChild(paragraph);
  modalContent.append(header, body);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}