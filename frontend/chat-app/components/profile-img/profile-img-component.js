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

    let profileStatusImgElement = this.shadowRoot.querySelector('.header-profile-status-dot')
  
    if (this.#activityStatusService) {
      profileStatusImgElement.classList.remove('header-profile-status-img-inactive')
    } else {
      profileStatusImgElement.classList.add('header-profile-status-img-inactive')
    }
  
    let profilePhotoCover = this.shadowRoot.querySelector('.header-profile-photo-cover');
    let profileImgElement;
  
    if (this.#imagesService !== '') {
      profileImgElement = document.createElement('img');
      profileImgElement.src = this.#imagesService;
      profilePhotoCover.append(profileImgElement);
      profileImgElement.classList.add('header-profile-photo');
    } else {
      profileImgElement = document.createElement('h1');
      profileImgElement.textContent = this.#namesService[0];
      profilePhotoCover.append(profileImgElement);
      profileImgElement.classList.add('header-profile-img-letter');
    }
  }
}
