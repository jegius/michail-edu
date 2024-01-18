import { getActivityStatusService } from '../../services/activityService.js';
import { getImagesService } from '../../services/imagesService.js';
import { getNameService } from '../../services/namesService.js';
import { createProfileImg } from './profile-img-component.template.js';

export class ProfileImgComponent extends HTMLElement {

  #imagesService = getImagesService()

  #namesService = getNameService()

  #activityStatusService = getActivityStatusService()

  static get name() {
    return "profile-img-component";
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
    templateElem.innerHTML = createProfileImg(this.#imagesService, this.#namesService, this.#activityStatusService);

    this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
  }
}
