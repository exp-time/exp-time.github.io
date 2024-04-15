
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

// Open popup modal page
function createModal(id, title, content, foooter_content) {
  const modal = document.createElement('div');
  if (event.target.classList.contains('w3-modal')) {
      document.getElementById(id).style.display = 'none';
  }
}


function openInNewTab(url) {
  window.open(url, '_blank').focus();
}
// Create main content cards
function createCard(id, info_id, title, iconClass, content, info_Title, info_Content) {
  const container = document.querySelector('.content');
  if (!container) {
    console.error('Failed to create card: container not found.');
    return; // Safety check to ensure the container exists
  } 
  // Card Vars
  var third = document.createElement('div').classList.add('w3-third');
  var card = document.createElement('div').classList.add('w3-card','w3-container');
  var row = document.createElement('div').classList.add('w3-row','w3-row-padding','w3-xlarge','container-title','flex-container');
  var dummyButton = document.createElement('div').classList.add('dummy-button');
  var titleDiv = document.createElement('div').classList.add('title');
  var infoIcon = document.createElement('a').classList.add('fa','fa-info','w3-button','top-corner');
  var paragraph = document.createElement('p');
  var selectedIcon = document.createElement('i');

  // Content
  titleDiv.textContent = title;
  paragraph.textContent = content;
  selectedIcon.className = iconClass + ' w3-margin-bottom w3-text-theme';

  createModal(info_id, info_Title, info_Content)

  infoIcon.onclick = function() { info_open(info_id); }; 
  row.append(dummyButton, titleDiv, infoIcon);
  card.append(row, selectedIcon, paragraph);
  third.appendChild(card)
  container.appendChild(third);
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

document.addEventListener('DOMContentLoaded', function() {
  cardData.forEach(function(card, index) {
      const contentId = `content-area${index + 1}`;
      const infoId = `info${index + 1}`;
      createCard(contentId, infoId, card.title, card.iconClass, card.content, card.info_Title, card.info_Content);
  });
});

// pagination
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.content');
  const sections = container.querySelectorAll('.w3-third');
  let currentPage = 0;
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination';
  container.appendChild(paginationContainer);

  function getCurrentItemsPerPage() {
      const width = window.innerWidth;
      if (width < 1100) {
          return 2;
      } else if (width >= 1100 && width < 1650) {
          return 4;
      } else {
          return 6;
      }
  }

  function showPage(page) {
      const itemsPerPage = getCurrentItemsPerPage();
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      sections.forEach((section, index) => {
          section.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
      });
  }

  function updateActiveButtonStates() {
    const pageButtons = paginationContainer.querySelectorAll('button');
    pageButtons.forEach((button, index) => {
        button.className = (index === currentPage) ? 'active' : '';
    });
  }

  function updatePageButtons() {
    while (paginationContainer.firstChild) {
        paginationContainer.removeChild(paginationContainer.firstChild);
    }
    const itemsPerPage = getCurrentItemsPerPage();
    const totalPages = Math.ceil(sections.length / itemsPerPage);
    if (currentPage >= totalPages) {                // Check if the current page is out of range
        currentPage = Math.max(0, totalPages - 1);  // Reset to the last page if out of range
    }
    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i + 1;
        pageButton.addEventListener('click', function() {
            currentPage = i;
            showPage(currentPage);
            updateActiveButtonStates();
        });
        paginationContainer.appendChild(pageButton);
    }
    showPage(currentPage);                          // Refresh view to reflect potentially new currentPage
    updateActiveButtonStates();                     // Refresh button states
  }

  window.addEventListener('resize', function() {
      updatePageButtons();                          // Fully handle resizing by updating the buttons and possibly currentPage
  });

  updatePageButtons();
});
