
function info_open(id, top) {
  var x = document.getElementById(id);
  x.style.fontSize = "20px";
  if (top) {
    x.style.paddingTop = "0%";
  }
  x.style.display = "block";
}

function info_close(id) { // Closing modals
  document.getElementById(id).style.display = "none";
}

function closeModal(event, id) { // Close if click outside of modal
  if (event.target.classList.contains('w3-modal')) {  // Check if the click was directly on the modal background
      document.getElementById(id).style.display = 'none';
  }
}

function createAboutsModal(id, title, emailContent, footerContent) {  // Open popup modal page
  const modal = createElementWithClass('div', 'w3-modal');
  modal.setAttribute('id', id);
  modal.setAttribute('onmousedown', `closeModal(event, '${id}')`);

  const modalContent = createElementWithClass('div', 'w3-modal-content w3-card-4 w3-animate-top');
  
  const header = createElementWithClass('header', 'w3-theme-l1 modal-header');
  const closeButton = createElementWithClass('span', 'w3-button w3-display-topright', 'x');
  closeButton.setAttribute('onclick', `info_close('${id}')`);
  const headerP = createElementWithClass('p', '', title);
  header.append(closeButton, headerP);

  const body = createElementWithClass('div', 'w3-padding');
  const emailLabel = createElementWithClass('p', '', 'Email:');
  const emailText = createElementWithClass('p', '', emailContent);
  body.append(emailLabel, emailText);

  const footer = createElementWithClass('footer', 'w3-container w3-theme-l1');
  const footerP = createElementWithClass('p', '', footerContent);
  footer.appendChild(footerP);

  modalContent.append(header, body, footer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

function createInfoModal(info_id, info_Title, info_Content) { // Info Popup modals
  const modal = createElementWithClass('div', 'w3-modal');
  modal.setAttribute('id', info_id);
  modal.setAttribute('onmousedown', 'closeModal(event, "' + info_id + '")');

  const modalContent = createElementWithClass('div', 'w3-modal-content w3-card-4 w3-animate-top');
  const header = createElementWithClass('header', 'w3-theme-l1 modal-header');
  const closeButton = createElementWithClass('span', 'w3-button w3-display-topright', 'x');
  closeButton.setAttribute('onclick', 'info_close("' + info_id + '")');
  
  const headerP = createElementWithClass('p', '', info_Title);
  header.append(headerP, closeButton);

  const body = createElementWithClass('div', 'w3-padding');
  const paragraph = createElementWithClass('p', '', info_Content);

  body.appendChild(paragraph);
  modalContent.append(header, body);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', function() {
  modalData.forEach(function(modal) {
      createAboutsModal(modal.id, modal.title, modal.content, modal.footer_content);
  });
});

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

function createElementWithClass(tag, className, textContent = '') {
  const element = document.createElement(tag);
  element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

function createCard(id, info_id, title, iconClass, content, info_Title, info_Content) { // Create main content cards
  const container = document.querySelector('.content');
  if (!container) {
      console.error('Failed to create card: container not found.');
      return;
  }

  const third = createElementWithClass('div', 'w3-third');
  const card = createElementWithClass('div', 'w3-card w3-container');
  const row = createElementWithClass('div', 'w3-row w3-row-padding w3-xlarge container-title flex-container');
  const dummyButton = createElementWithClass('div', 'dummy-button');
  const titleDiv = createElementWithClass('div', 'title', title);
  const infoIcon = createElementWithClass('a', 'fa fa-info w3-button top-corner');
  const paragraph = createElementWithClass('p', '', content);
  const selectedIcon = createElementWithClass('i', iconClass + ' w3-margin-bottom w3-text-theme');

  infoIcon.onclick = () => info_open(info_id);
  row.append(dummyButton, titleDiv, infoIcon);
  card.append(row, selectedIcon, paragraph);
  third.appendChild(card);
  container.appendChild(third);

  createInfoModal(info_id, info_Title, info_Content);
}

document.addEventListener('DOMContentLoaded', function() {  // Set main cards on the page
  cardData.forEach(function(card, index) {
      const contentId = `content-area${index + 1}`;
      const infoId = `info${index + 1}`;
      createCard(contentId, infoId, card.title, card.iconClass, card.content, card.info_Title, card.info_Content);
  });
});

document.addEventListener('DOMContentLoaded', function() { // pagination
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
    showPage(currentPage);            // Refresh view to reflect potentially new currentPage
    updateActiveButtonStates();       // Refresh button states
  }
  window.addEventListener('resize', function() { updatePageButtons() }); 
  updatePageButtons();
});
