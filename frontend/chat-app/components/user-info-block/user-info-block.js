import { createUserInfoBlockTemplate } from "./user-info-block.template";

const defaultAvatar = 'https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149760515.jpg?t=st=1709056676~exp=1709060276~hmac=55f551634adbc78dfe62163921b8fd5ae89b2d05a7ef69f29f5cb3043d09ef1d&w=1380'

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
    templateElm.innerHTML = createUserInfoBlockTemplate({name: 'Olga', avatar: defaultAvatar, status: 'Active'});
    this.shadowRoot.appendChild(templateElm.content.cloneNode(true));
  }
}
