class Elem {
  constructor(tag, attrs = {}, children = []) {
      this.elem = document.createElement(tag);
      this.setAttr(attrs);
      this.addChildren(children);
  }

  setAttr(attributes) {
      for (const key in attributes) {
          if (attributes.hasOwnProperty(key)) {
              this.elem[key] = attributes[key];
          }
          else {
            console.log("Error, no hasOwnProperty(key)")
          }
      }
      return this;
  }

  appendTo(parent) {
      parent.appendChild(this.elem);
      return this;
  }

  addChild(childSpec) {
      const child = new Elem(childSpec.tag, childSpec.attrs, childSpec.children || []);
      this.elem.appendChild(child.elem);
      return child;
  }

  addChildren(childrenSpecs) {
      if (!Array.isArray(childrenSpecs)) {
          childrenSpecs = [childrenSpecs]; 
      }
      childrenSpecs.forEach(spec => this.addChild(spec));
      return this;
  }
}