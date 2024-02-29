import { createUserInfoBlockTemplate } from "./user-info-block.template";

export class UserInfoBlock extends HTMLElement {
  static get name() {
    return "user-info-block";
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const templateElm = document.createElement("template");
    templateElm.innerHTML = createUserInfoBlockTemplate({});
    this.shadowRoot.appendChild(templateElm.content.cloneNode(true));
  }
}