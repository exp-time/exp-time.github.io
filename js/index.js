let isString = value => typeof value === 'string';

function info_open(id) {document.getElementById(id).style.display = "block"}
function info_close(id) {document.getElementById(id).style.display = "none"}
function openInNewTab(url) {window.open(url, '_blank').focus()}

function closeElem(event, id, elem) {                      // Close if click outside of modal
  if (event.target.classList.contains(elem)) {             // Check if the click was directly on the modal background
      document.getElementById(id).style.display = 'none';
  }
}

function makeDocumentModal(id, content) {
  new Elem({tag: 'div', attrs: {className: 'w3-modal',id:id, onmousedown: function(event) {
    closeElem(event, id, 'w3-modal')}},children:[content],parent:document.body});
}

function headerWithClose(id, title, style) {
  return new Elem({tag:'header',attrs:{className:`w3-theme-l1 ${style}`},children:[
    {tag:'p',attrs:{textContent:title}},
    {tag:'div',attrs:{className:'w3-button display-topright',onclick:()=>info_close(id)},children:[
      {tag:'i',attrs:{className:'fa fa-remove'}}]}]}).elem;
}

function createTooltipIcon(link, title, icon, target) {
  new Elem({tag: 'div', attrs:{className: 'w3-tooltip'},children: [
      {tag: 'span', attrs: {className: 'w3-text w3-theme-light',textContent: title}},
      {tag: 'div', attrs:{className: 'w3-button font-xxxlarge fa ' + icon,
        onclick: link ? () => openInNewTab(link) : () => window.scrollTo({top: 0, behavior: 'smooth'})}}], 
    parent: document.querySelector(target)});
}

function createSidebar(id, title, content) { // Sidebar popups
  const sidebar = new Elem({tag: 'div', attrs: {className: 'w3-sidebar w3-card w3-animate-left w3-center'},
    children: [ headerWithClose(id, title, "sidebar-header font-large") ]}).elem;
  const sidebarContent = new Elem({tag: 'div', attrs: {className: 'sidebar-content font-medium w3-bar-block'}}).elem;
  for (const key in content) {
    new Elem({tag:'div',attrs: {className:'w3-bar-item w3-button',textContent:key, 
    onclick: () => openInNewTab(content[key])}, parent: sidebarContent});
  }
  sidebar.appendChild(sidebarContent)
  makeDocumentModal(id, sidebar)
}

function createModal(id, title, content, footerContent) {
  const modalContent = new Elem({tag:'div',attrs:{className: 'w3-modal-content w3-card-4 modal-animate-top'},
    children: [headerWithClose(id, title, "modal-header font-xlarge"),
      {tag: 'div', attrs: {className: 'w3-padding'}, children:[
        {tag: 'p', attrs: {className:'font-large',textContent:content}}]}]}).elem;

  if (footerContent && footerContent != ""){
    const footer = new Elem({tag: 'footer', attrs: {className: 'w3-theme-l1 modal-footer font-medium'}}).elem;
    if (typeof footerContent === 'object' && !(footerContent instanceof Array)) {
      for (const key in footerContent) { // If footerContent is an object (not an array), handle as key-value pairs for links
        new Elem({tag: 'p', attrs: {className: 'font-medium'}, children:[
          {tag:'a',attrs:{className:'w3-button padding-top-bottom',textContent: key,
           onclick: () => openInNewTab(footerContent[key])}}], parent: footer});
      }
    } else {new Elem({tag: 'p', attrs: {className: 'font-medium', textContent:footerContent}, parent:footer})} 
    modalContent.appendChild(footer);
  }
  makeDocumentModal(id, modalContent)
}

function createCard(id, info_id, title, iconClass, content, info_Title, info_Content) { // Create main content cards
  const container = document.querySelector('.content');
  const third = new Elem({tag: 'div', attrs: {className: 'w3-third'}, parent:container}).elem;
  const card = new Elem({tag: 'div', attrs: {className: 'w3-card w3-container'}, parent:third}).elem;
  const row = new Elem({tag:'div',attrs:{className: 'w3-row font-xlarge container-title flex-container'},parent: card,
    children: [
      {tag:'a',attrs:{className: 'fa fa-info dummy-button w3-button'}},
      {tag:'div',attrs:{className: 'title',textContent: title}}, 
      {tag:'a',attrs:{className: 'fa fa-info w3-button top-corner', onclick: () => info_open(info_id)}}],
  }); 
  if (iconClass != '') {new Elem({tag:'i',attrs:{className: iconClass + ' w3-margin font-mega w3-text-theme'},parent: card})}
  if (isString(content)) { new Elem({tag: 'p', attrs: {className: 'font-large',textContent: content}, parent: card}) }
  else if (content === 0){ card.appendChild(createWebTerminal()) }
  else if (content === 1){ card.appendChild(createEditableTable()) }
  else if (content === 2){ card.appendChild(createMap()) }
  else if (content === 3){ new Elem({tag:'div',parent:card,children: [
      {tag:'label',attrs:{for:'vehicleType',className:'font-large',textContent:'Choose a vehicle:'}},
      {tag:'select',attrs:{name:'vehicle',id:'vehicleType'},children: [
          { tag: 'option', attrs: { value: 'car', textContent: 'Car' } },
          { tag: 'option', attrs: { value: 'truck', textContent: 'Truck'}}]},
      {tag: 'div', attrs: {id:"mapDataContainer", className: 'w3-padding'}}]});
  } else { new Elem({tag: 'p', attrs: {className: 'font-large'}, parent: card})} 

  createModal(info_id, info_Title, info_Content);
}

document.addEventListener('DOMContentLoaded', function() { // pagination + others
  let container = document.querySelector('.content')

  modalData.forEach(function(modal) {createModal(modal.id, modal.title, modal.content, modal.footerContent)});

  sideBarData.forEach(function(item) {createSidebar(item.id, item.title, item.content)}); 

  cardData.forEach(function(card, index) { createCard(`content-area${index + 1}`, `info${index + 1}`,
    card.title, card.iconClass, card.content, card.info_Title, card.info_Content)});

  clickablesData.forEach(function(item) {createTooltipIcon(item.link, item.content, item.icon, item.container)}); 

  initializeMap()

  const sections = container.querySelectorAll('.w3-third');
  let currentPage = 0;
  let paginationContainer = new Elem({tag: 'div', attrs: {className: 'pagination'}, parent: container}).elem

  function showPage(page) {
    const itemsPerPage = getCurrentItemsPerPage(window.innerWidth);
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    sections.forEach((section, index) => {
      section.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });
  }

  function updatePageButtons() {
    while (paginationContainer.firstChild) {  // Cant we remove all of these at once?
      paginationContainer.removeChild(paginationContainer.firstChild)}
    const itemsPerPage = getCurrentItemsPerPage(window.innerWidth);
    const totalPages = Math.ceil(sections.length / itemsPerPage);
    if (currentPage >= totalPages) {                // Check if the current page is out of range
      currentPage = Math.max(0, totalPages - 1);    // Reset to the last page if out of range
    }
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', function() {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates(paginationContainer,currentPage);
      });
        paginationContainer.appendChild(pageButton);
    }
    showPage(currentPage);            // Refresh view to reflect potentially new currentPage
    updateActiveButtonStates(paginationContainer,currentPage);       // Refresh button states
  }
  window.addEventListener('resize', function() { updatePageButtons() }); 
  updatePageButtons();

  /* REMOVE */
  document.getElementById('unfinished_modal').style.display='block'
  /* REMOVE */
});

function getCurrentItemsPerPage(width) {  // mod and max.. Every 550px or so we need a new column. until then we need padding..
  //return Math.min(6, ); Math.round()
  if (width < 1100) {return 2}
  else if (width >= 1100 && width < 1650) {return 4} 
  else {return 6}
}

function updateActiveButtonStates(buttonContainer, currentPage) {
  const buttons = buttonContainer.querySelectorAll('button');
  buttons.forEach((button, index) => {button.className = (index === currentPage) ? 'active' : ''});
}