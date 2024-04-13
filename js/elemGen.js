function createCard(title, content, iconClass) {
    // Card
    var card = document.createElement('div');
    card.className = 'w3-card w3-container';

    // Row for title
    var row = document.createElement('div');
    var dummyButton = document.createElement('div');
    var titleDiv = document.createElement('div');
    var infoIcon = document.createElement('a');

    row.className = 'w3-row w3-row-padding w3-xlarge container-title flex-container';
    dummyButton.className = 'dummy-button';
    titleDiv.className = title;
    titleDiv.textContent = 'API Endpoints';
    infoIcon.onclick = function() { info_open('first_info'); }; 
    infoIcon.className = 'fa fa-info w3-button top-corner';

    row.append(dummyButton, titleDiv, infoIcon);

    // Terminal icon
    var selectedIcon = document.createElement('i');
    selectedIcon.className = iconClass + 'fa w3-margin-bottom w3-text-theme';

    // Paragraphs
    var paragraph = document.createElement('p');
    paragraph.textContent = content;

    card.append(row, selectedIcon, paragraph);

    // Append container to a predefined area in the HTML
    document.getElementById('w3-third content-area').appendChild(card);
}