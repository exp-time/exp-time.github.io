function createCard() {
    // Card
    var card = document.createElement('div');
    card.className = 'w3-card w3-container';
    // Row for title
    var row = document.createElement('div');
    row.className = 'w3-row w3-row-padding w3-xlarge container-title flex-container';
    // Dummy button (placeholder)
    var dummyButton = document.createElement('div');
    dummyButton.className = 'dummy-button';
    // Title
    var titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = 'API Endpoints';

    // Info icon
    var infoIcon = document.createElement('a');
    infoIcon.onclick = function() { info_open('first_info'); }; // Assuming info_open is a function defined elsewhere
    infoIcon.className = 'fa fa-info w3-button top-corner';

    // Append title elements to the row
    row.appendChild(dummyButton);
    row.appendChild(titleDiv);
    row.appendChild(infoIcon);

    // Terminal icon
    var terminalIcon = document.createElement('i');
    terminalIcon.className = 'fa fa-terminal w3-margin-bottom w3-text-theme';

    // Paragraphs
    var paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Custom built, with effortless use';

    var paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Data-products for seamless integration';

    var paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Advanced applications and tangible value generation';

    // Append all elements to the card
    card.appendChild(row);
    card.appendChild(terminalIcon);
    card.appendChild(paragraph1);
    card.appendChild(paragraph2);
    card.appendChild(paragraph3);

    // Append container to a predefined area in the HTML
    document.getElementById('content-area').appendChild(card);
}