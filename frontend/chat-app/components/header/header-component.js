import { getActivityStatusService } from '../../services/activityService.js';
import { getImagesService } from '../../services/imagesService.js';
import { getNameService } from '../../services/namesService.js';
import { createHeader } from './header-component.template.js';

export class HeaderComponent extends HTMLElement {

  #imagesService = getImagesService()

  #namesService = getNameService()

  #activityStatusService = getActivityStatusService()

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
    templateElem.innerHTML = createHeader(this.#imagesService, this.#namesService, this.#activityStatusService);

    this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
  }
}
