import {getHeaderComponentStyles} from './header-component.styles.js';

export function createHeader() {
    return `
    ${getHeaderComponentStyles()}
    <div class="header">
      <user-info-component>
    </div>
    `;
}