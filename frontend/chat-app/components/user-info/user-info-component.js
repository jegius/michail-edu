import { SERVICES } from '../../di/api.js';
import { diContainer } from '../../di/di.js';

import { createUserInfo } from './user-info-component.template.js';

export class UserInfoComponent extends HTMLElement {

  #imageService = diContainer.resolve(SERVICES.images);
  #namesService = diContainer.resolve(SERVICES.names);
  #activityStatusService = diContainer.resolve(SERVICES.activity)


  static get name() {
    return "user-info-component";
  }

  constructor() {
      super();
      this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#render()
  }

  #render() {
    let activeStatusSpan;

    if (this.#activityStatusService.getActivity()) {
      activeStatusSpan = 'Active'
    } else {
      activeStatusSpan = 'Inactive'
    }

    const templateElem = document.createElement("template");
    templateElem.innerHTML = createUserInfo(this.#imageService.getImage(), this.#namesService.getUserName(), activeStatusSpan);

    this.shadowRoot.appendChild(templateElem.content.cloneNode(true));

    let profileStatusImgElement = this.shadowRoot.querySelector('.user-info-activity-dot')
  
    if (this.#activityStatusService.getActivity()) {
      profileStatusImgElement.classList.remove('user-info-activity-dot-inactive')
    } else {
      profileStatusImgElement.classList.add('user-info-activity-dot-inactive')
    }
  
    let profilePhotoCover = this.shadowRoot.querySelector('.user-info-photo-cover');
    let profileImgElement;
  
    if (this.#imageService.getImage() !== '') {
      profileImgElement = document.createElement('img');
      profileImgElement.src = this.#imageService.getImage();
      profilePhotoCover.append(profileImgElement);
      profileImgElement.classList.add('user-info-photo');
    } else {
      profileImgElement = document.createElement('p');
      profileImgElement.textContent = this.#namesService.getUserName()[0];
      profilePhotoCover.append(profileImgElement);
      profileImgElement.classList.add('user-info-img-letter');
    }
  }
}