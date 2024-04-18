class Elem {
  constructor(tag, attrs = {}, children = []) {
      this.elem = document.createElement(tag);
      this.setAttr(attrs);
      this.addChildren(children); // Automatically handle children during initialization
  }

  setAttr(attributes) {
      Object.entries(attributes).forEach(([key, value]) => this.elem[key] = value);
      return this;
  }

  appendTo(parent) {
      parent.appendChild(this.elem);
      return this;
  }

  addChild(childSpec, returnParent = false) {
      const child = new Elem(childSpec.tag, childSpec.attrs, childSpec.children || []);
      this.elem.appendChild(child.elem);
      return returnParent ? this : child;  // Control whether to return the parent or the child
  }

  addChildren(childrenSpecs) {
      childrenSpecs.forEach(spec => this.addChild(spec));
      return this;
  }
}