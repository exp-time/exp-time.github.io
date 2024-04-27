class Elem {
  constructor(tag, attrs = {}, children = [], parent = null) {
    this.elem = document.createElement(tag);
    this.setAttr(attrs);
    this.addChildren(children);
    if (parent) {
      this.appendTo(parent);
    }
  }

  setAttr(attributes) {
    Object.entries(attributes).forEach(([key, value]) => this.elem[key] = value);
    return this;
  }

  addChild(childSpec) {
    const child = new Elem(childSpec.tag, childSpec.attrs, childSpec.children || []);
    this.elem.appendChild(child.elem);
    return child;  // Control whether to return the parent or the child
  }

  addChildren(childrenSpecs) {
    childrenSpecs.forEach(spec => this.addChild(spec));
    return this;
  }

  appendTo(parent) {
    if (parent instanceof HTMLElement) {
      parent.appendChild(this.elem);
      return this;
    }
  }
}

// Helper function to debounce another function
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}