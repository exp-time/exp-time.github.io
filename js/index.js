// Side navigation
function w3_open(id) {
  var x = document.getElementById(id);
  /*var primaryColor = getComputedStyle(document.documentElement).getPropertyValue('.w3-theme-l4');*/
  x.style.fontSize = "20px";
  x.style.paddingTop = "0%";
  x.style.display = "block";
  /*x.style.backgroundColor = primaryColor;*/
}

function info_open(id) {
  var x = document.getElementById(id);
  x.style.fontSize = "20px";
  x.style.paddingTop = "0%";
  x.style.display = "block";
}

// Closing modals

function info_close(id) {
  document.getElementById(id).style.display = "none";
}

function closeModal(event) {
  // Check if the click was directly on the modal background
  if (event.target.classList.contains('w3-modal')) {
      document.getElementById('about_modal').style.display = 'none';
  }
}

// Optional: Enhance the close button functionality to stop event propagation
var closeButton = document.querySelector('.w3-modal .w3-display-topright');
closeButton.onclick = function(event) {
  event.stopPropagation(); // Prevent click from bubbling to the modal background
  document.getElementById('about_modal').style.display = 'none';
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