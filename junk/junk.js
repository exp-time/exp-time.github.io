function genContent(parentELement, content, tag, classList) {
  if (typeof content === 'string') {
    new Elem({tag: tag, attrs: {className: classList,textContent: content}, parent: parentELement});
  } else if (typeof content === 'object') { 
    for (const [key, value] of Object.entries(content)) { 
      if (tag === "button") {
        
      }
      else {
        new Elem({tag: tag, attrs: {id: key, className: classList,textContent: value}, parent: parentELement});
      }
    } 
  } else {console.error(`Content generation error to ${parentELement}`);}
}