import { getHeaderComponentStyle } from "./header-component.styles";
import { UserInfoBlock } from "../user-info-block/user-info-block";

export function createHeaderTemplate() {
  return `
  ${getHeaderComponentStyle()}
  <header class="header">
    <user-info-block></user-info-block>
  </header>
  `;
}

customElements.define(UserInfoBlock.name, UserInfoBlock);
