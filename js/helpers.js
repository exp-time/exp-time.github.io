class Elem {
  constructor(tag) {
    this.elem = document.createElement(tag);
  }

  setAttr(attributes) {
    for (const attr in attributes) {
      this.elem[attr] = attributes[attr];
    }
    return this;
  }

  appendTo(parent) {
    parent.appendChild(this.elem);
    return this;
  }

  addChild(tag, attributes = {}) {
    const child = new Elem(tag).setAttr(attributes).appendTo(this.elem);
    return child;
  }

  addChildren(children) {
    if (!Array.isArray(children)) {children = [children]} // Ensure it's an array even if single child spec is passed

    children.forEach(childSpec => {
      const child = new Elem(childSpec.tag).setAttr(childSpec.attrs || {}).appendTo(this.elem);
        if (childSpec.children) {child.addChild(childSpec.children)}  // Recursively add children
    });
    return this; 
    }
}