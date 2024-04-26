function s_Sidebar(element) {   // .w3-sidebar
  element.style["width"] = '35%';
  element.style["top"] = '5%';
}

function s_Tooltip(element) { // .w3-tooltip
  element.style["position"] = 'relative';
  element.style["font-size"] = fontMedium;  // Create dynamic fonts

  // needs to work on text child not tooltip element!
  element.addEventListener('mouseenter', function() { // On hover
    element.style["display"] = 'block'});
  element.addEventListener('mouseleave', function() { // Revert hover
    element.style["display"] = 'none'});
}

function s_tooltip_Text(element) {   // .w3-sidebar
  element.style['display'] = 'none';
  element.style['position'] = 'absolute';
  element.style['bottom'] = '100%';
  element.style['left'] = '50%';
  element.style['transform'] = 'translateX(-50%)';
  element.style['white-space'] = 'nowrap';
  element.style['padding'] = '2px 4px'; // make dynamic
}

function s_displayCard(element) { // Main cards!
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


function s_button(element) { // w3-button
  element.style["border"] = 'none';
  element.style["display"] = 'inline-block';
  element.style["padding"] = '';              // inherit
  element.style["vertical-align"] = 'middle'; // remove?
  element.style["overflow"] = 'hidden';       // remove?
  element.style["text-decoration"] = 'none';  // remove?
  element.style["color"] = '#fff !important;';// remove?
  element.style["text-align"] = 'center';
  element.style["cursor"] = 'pointer';
  element.style["white-space"] = 'nowrap';    // remove?
  element.style[""] = '';
  element.style["background-color"] = 'transparent !important'

  element.addEventListener('mouseenter', function() { // On hover
    element.style["color"] = '#000 !important'; 
    element.style["background-color"] = '#ccc !important'});
  element.addEventListener('mouseleave', function() { // Revert hover
    element.style["color"] = '#fff !important'; 
    element.style["background-color"] = 'transparent !important'});
}

function s_noSelect(element) {
  element.style.webkitTouchCallout = 'none';
  element.style.webkitUserSelect = 'none';
  element.style.khtmlUserSelect = 'none';
  element.style.mozUserSelect = 'none';
  element.style.msUserSelect = 'none';
  element.style.userSelect = 'none';
}

// Function to adjust dynamic sizing 
function adjustDynamics() {
  const width = window.innerWidth;

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

// element.style[''] = '';

// const width = window.innerWidth;

// window.addEventListener('resize', debounce(adjustDynamics, 100));