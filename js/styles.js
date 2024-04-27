function s_sideBar(element) {   // .w3-sidebar
  element.style["width"] = '35%';
  element.style["top"] = '5%';
}

function s_tooltip(element) { // .w3-tooltip
  element.style["position"] = 'relative';
  element.style["font-size"] = fontMedium;  // Create dynamic fonts

  // needs to work on text child not tooltip element!
  element.addEventListener('mouseenter', function() { // On hover
    element.style["display"] = 'block'});
  element.addEventListener('mouseleave', function() { // Revert hover
    element.style["display"] = 'none'});
}

function s_tooltipText(element) {   
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

const fontsSize = {
  'fontSmall': [10, 0.5],
  'fontMedium': [12, 0.75],
  'fontLarge': [14, 1.0],
  'fontXlarge': [16, 1.25],
  'fontXxlarge': [20, 1.75],
  'fontXxxlarge': [24, 2.5],
  'fontJumbo': [28, 3.5],
  'fontMega': [36, 5.5],
};

function getFontSize(key) {
  const viewportWidth = window.innerWidth;
  const [fixedSize, vwSize] = minFonts[key];
  const vwInPixels = vwSize * viewportWidth / 100;
  return Math.max(fixedSize, vwInPixels);
}


// Function to adjust dynamic sizing 
function adjustDynamics() {
  const width = window.innerWidth;

}

// element.style[''] = '';

// const width = window.innerWidth;

// window.addEventListener('resize', debounce(adjustDynamics, 100));