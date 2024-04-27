class Elem {
  constructor(tag, attrs = {}, children = [], parent = {}) {
    this = document.createElement(tag);
    this.setAttr(attrs);
    this.addChildren(children);
    this.appendTo(parent);
    return new Proxy(this, {
      get(target, property, receiver) {
        if (property in target) {
          return target[property];
        } else {
          return target.elem[property];
        }
      },
      set(target, property, value, receiver) {
        if (property in target) {
          target[property] = value;
        } else {
          target.elem[property] = value;
        }
        return true;
      }
    });
  }

  setAttr(attributes) {
      Object.entries(attributes).forEach(([key, value]) => this[key] = value);
      return this;
  }

  addChild(childSpec, returnParent = false) {
      const child = new Elem(childSpec.tag, childSpec.attrs, childSpec.children || []);
      this.appendChild(child);
      return returnParent ? this : child;  // Control whether to return the parent or the child
  }

  addChildren(childrenSpecs) {
      childrenSpecs.forEach(spec => this.addChild(spec));
      return this;
  }

  appendTo(parent) {
    if (parent instanceof HTMLElement) {
      parent.appendChild(this);
      return this;
    }
    else {console.log("something broke!")}
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