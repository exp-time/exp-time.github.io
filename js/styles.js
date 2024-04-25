function s_Sidebar(element) {
  element.style["width"] = '35%';
  element.style["top"] = '5%';
}

function s_Tooltip(element) {
  element.style["position"] = 'relative';
  element.style["font-size"] = fontMedium;  // Create dynamic fonts
}

function s_TooltipButton(element) {
  element.style["cursor"] = 'pointer';
  element.style["color"] = '#fff !important';
}

// element.style[''] = '';
function s_displayCard(element) {
  element.style['display'] = 'block';
  element.style['float'] = 'left';
  element.style['padding'] = cardPad;       // Make dynamic card padding!
  element.style['text-align'] = 'center';
  element.style['align-items'] = 'center';
  element.style['width'] = cardWidth;       // Make dynamic card width!
  element.style['height'] = cardHeight;     // Make dynamic card height!
  // .w3-card{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);}
  element.style['box-shadow'] = cardShadow; // Make dynamic (card) shadow!
  element.style['flex-grow'] = '0';         // set flex-grow to 0 default
  element.style[''] = '';
}

// Function to adjust dynamic sizing 
function adjustDynamics() {
  
}

const minFonts = {
  'fontSmall': 10,
  'fontMedium': 12,
  'fontLarge': 14,
  'fontXlarge': 16,
  'fontXxlarge': 20,
  'fontXxxlarge': 24,
  'fontJumbo': 28,
  'fontMega': 36
};

// const width = window.innerWidth;

// window.addEventListener('resize', debounce(initAdjustPadding, 100));