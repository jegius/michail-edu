import { SERVICES } from '../../di/api.js';
import { diContainer } from '../../di/di.js';

import { createUserInfo } from './user-info-component.template.js';

export class UserInfoComponent extends HTMLElement {

  #currentUserService = diContainer.resolve(SERVICES.auth);

  static get name() {
    return "user-info-component";
  }

  constructor() {
      super();
      this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#currentUserService
      .getCurrentUser$()
      .then(response => this.#render(response))
  }

  #render(userData) {
    const templateElem = document.createElement("template");
    templateElem.innerHTML = createUserInfo(userData);

    this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
  }
}