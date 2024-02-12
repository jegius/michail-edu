import { authService } from '../../services/authService.js';

import { createUserInfo } from './user-info-component.template.js';

export class UserInfoComponent extends HTMLElement {

  #currentUserService = new authService()

  static get name() {
    return "user-info-component";
  }

  constructor() {
      super();
      this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#currentUserService.subscribeOnCurrentUser(this.#render(this.#currentUserService.currentUser))
  }

  disconnectedCallback() {
    this.#currentUserService.unsubscribeFromCurrentUser(this.#render(this.#currentUserService.currentUser))
  }

  #render(userData) {
    const templateElem = document.createElement("template");
    templateElem.innerHTML = createUserInfo(userData);

    this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
  }
}