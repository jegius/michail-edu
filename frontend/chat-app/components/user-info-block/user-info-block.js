import { createUserInfoBlockTemplate } from "./user-info-block.template";
import { diContainer } from "../../di/di";
import { SERVICES } from "../../di/api";

export class UserInfoBlock extends HTMLElement {
  #authService = diContainer.resolve(SERVICES.auth);
  static get name() {
    return "user-info-block";
  }
  #currentUser;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.#authService.getCurrentUser().then((user) => {
      this.#currentUser = user;
      this.#render(this.#currentUser);
    });
  }

  #render(user) {
    const templateElm = document.createElement("template");
    templateElm.innerHTML = createUserInfoBlockTemplate(this.#currentUser);
    this.shadowRoot.appendChild(templateElm.content.cloneNode(true));
  }
}
