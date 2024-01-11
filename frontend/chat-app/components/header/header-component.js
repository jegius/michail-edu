import { createHeader } from './header-component.template.js';

export class HeaderComponent extends HTMLElement {

  static get name() {
    return "header-component";
  }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.#render()
    }

    #render() {
        const templateElem = document.createElement("template");
        templateElem.innerHTML = createHeader();

        this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
    }
}
