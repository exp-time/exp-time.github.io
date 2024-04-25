function s_Sidebar(element) {
  element.style["width"] = '35%';
  element.style["top"] = '5%';
}

function s_Tooltip(element) {
  element.style["position"] = 'relative';
  element.style["font-size"] = '12px';
}

function s_TooltipButton(element) {
  element.style["cursor"] = 'pointer';
  element.style["color"] = '#fff !important';
}




const minFonts = {
  'font-small': 10,
  'font-medium': 12,
  'font-large': 14,
  'font-xlarge': 16,
  'font-xxlarge': 20,
  'font-xxxlarge': 24,
  'font-jumbo': 28,
  'font-mega': 36
};

const width = window.innerWidth;