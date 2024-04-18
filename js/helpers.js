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

  addChild(childSpec) {
    if (typeof childSpec.tag !== 'string') {
      console.error('Invalid tag in addChild:', childSpec.tag);  // Additional debugging
      throw new Error("Child tag must be a string, got " + typeof childSpec.tag);
    }
    const child = new Elem(childSpec.tag).setAttr(childSpec.attrs || {}).appendTo(this.elem);
    if (childSpec.children) {
      child.addChildren(childSpec.children);
    }
    return this;
  }

  addChildren(children) {
    children.forEach(childSpec => this.addChild(childSpec));
    return this;
  }
}