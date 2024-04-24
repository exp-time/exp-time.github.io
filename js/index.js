let isString = value => typeof value === 'string';

function info_open(id) {
  var x = document.getElementById(id);
  x.style.display = "block";
}

function info_close(id) {                             // Closing modals
  document.getElementById(id).style.display = "none";
}

function closeElem(event, id, elem) {                      // Close if click outside of modal
  if (event.target.classList.contains(elem)) {  // Check if the click was directly on the modal background
      document.getElementById(id).style.display = 'none';
  }
}

function makeDocumentModal(id, content) {
  const modal = new Elem('div').setAttr({className: 'w3-modal',id:id});
  if (content instanceof Elem) {content.appendTo(modal.elem)}
  else { modal.elem.appendChild(content)}
  modal.elem.onmousedown = function(event) {closeElem(event, id, 'w3-modal')};
  modal.appendTo(document.body);
}

function headerWithClose(id, title, theme) {
  const header = new Elem('header').setAttr({className: `w3-theme-l1 font-large ${theme}`});
  header.addChild({tag: 'p', attrs: {textContent: title}});
  const closeButton = header.addChild({
      tag: 'div',
      attrs: {className: 'w3-button display-topright'},
      children: [{  
          tag: 'i',
          attrs: {className: 'fa fa-remove'}
      }]
  });
  closeButton.elem.onmousedown = function(event) {info_close(id)};
  return header.elem;
}

function createTooltipIcon(link, title, icon) {
  const container = document.querySelector('.footer-container');
  const tooltip = new Elem('div').setAttr({className: 'w3-tooltip'}).appendTo(container);
  tooltip.addChild({tag: 'span',attrs: {className: 'w3-text w3-theme-light',textContent: title}});
  const buttonAttributes = {
      className: 'w3-text-white pointer-cursor font-xxxlarge fa ' + icon,
      onclick: link ? () => openInNewTab(link) : () => window.scrollTo({top: 0, behavior: 'smooth'})};
  tooltip.addChild({tag: 'div',attrs: buttonAttributes});
}

function createSidebar(id, title, content) { // Sidebar popups
  const sidebar = createElementWithClass('div', 'w3-sidebar w3-card w3-animate-left w3-center');
  const sidebarContent = createElementWithClass('div', 'sidebar-content font-medium w3-bar-block')
  const header = headerWithClose(id, title, "sidebar-header")
  sidebar.appendChild(header);
  for (const key in content) {
    const menuItem = createElementWithClass('div', 'w3-bar-item w3-button', key); // Add menu items
    menuItem.onclick = () => openInNewTab(content[key]);
    sidebarContent.appendChild(menuItem)
  }
  sidebar.appendChild(sidebarContent)
  makeDocumentModal(id, sidebar)
}

function createModal(id, title, content, footerContent) {  
  const modalContent = createElementWithClass('div', 'w3-modal-content w3-card-4 modal-animate-top');
  const header = headerWithClose(id, title, "modal-header")
  const body = createElementWithClass('div', 'w3-padding');
  const bodyText = createElementWithClass('p', 'font-medium', content);
  body.appendChild(bodyText);
  modalContent.append(header, body);
  if (footerContent && footerContent != ""){
    const footer = createElementWithClass('footer', 'w3-theme-l1 modal-footer font-small');
    if (typeof footerContent === 'object' && !(footerContent instanceof Array)) {
      for (const key in footerContent) { // If footerContent is an object (not an array), handle as key-value pairs for links
        const link = createElementWithClass('a', 'w3-button padding-top-bottom', key)
        link.onclick = () => openInNewTab(footerContent[key]);
        const item = createElementWithClass('p', 'font-medium', '');
        item.appendChild(link);
        footer.appendChild(item);
      }
      } else { // Handle as plain text
        const footerP = createElementWithClass('p', 'font-medium', footerContent); 
        footer.appendChild(footerP);
      }
    modalContent.appendChild(footer);
  }
  makeDocumentModal(id, modalContent)
}

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
  const row = createElementWithClass('div', 'w3-row font-xlarge container-title flex-container');
  const dummyButton = createElementWithClass('a', 'fa fa-info dummy-button w3-button');
  const titleDiv = createElementWithClass('div', 'title', title);
  const infoIcon = createElementWithClass('a', 'fa fa-info w3-button top-corner');
  infoIcon.onclick = () => info_open(info_id);
  row.append(dummyButton, titleDiv, infoIcon);
  card.appendChild(row);
  let paragraph;
  if (isString(content)) { 
    paragraph = createElementWithClass('p', 'font-large', content);
  }
  else if (content === 0){ // TODO: modify else..
    paragraph = createWebTerminal()
  }
  else if (content === 1){ // TODO: modify else..
    paragraph =  createEditableTable(["Name", "Age", "Job", "Location"], [
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
      
  ]);
  }
  else {
    // TODO HANDLE
  }
  if (iconClass != '') {
    const selectedIcon = createElementWithClass('i', iconClass + ' w3-margin font-mega w3-text-theme');
    card.appendChild(selectedIcon)
  }
  card.appendChild(paragraph);
  third.appendChild(card);
  container.appendChild(third);
  createModal(info_id, info_Title, info_Content);
}

document.addEventListener('DOMContentLoaded', function() { // pagination + others
  /* REMOVE */
  document.getElementById('unfinished_modal').style.display='block'
  /* REMOVE */
  modalData.forEach(function(modal) {
    createModal(modal.id, modal.title, modal.content, modal.footerContent);
  });
  sideBarData.forEach(function(item) {
    createSidebar(item.id, item.title, item.content);
  }); 
  cardData.forEach(function(card, index) {
    const contentId = `content-area${index + 1}`;
    const infoId = `info${index + 1}`;
    createCard(contentId, infoId, card.title, card.iconClass, card.content, card.info_Title, card.info_Content);
  });
  clickablesData.forEach(function(item) {
    createTooltipIcon(item.link, item.content, item.icon);
  }); 

  const container = document.querySelector('.content');
  const sections = container.querySelectorAll('.w3-third');
  let currentPage = 0;
  const paginationContainer = createElementWithClass('div', 'pagination')
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
