import { createProfileImg } from '../profile-img/profile-img-component.js';
import {getHeaderComponentStyles} from './header-component.styles.js';

let profileImgElem = document.createElement("headerImg");

profileImgElem = createProfileImg();

export function createHeader() {
    return `
    ${getHeaderComponentStyles()}
    
    <div class="header center">
      ${profileImgElem}
      
      <div class="header-profile-name-cover">
          <h2 class="header-profile-name-text">Ope</h2>
          <span class="header-profile-status-paragraph">Active</span>
      </div>
    </div>
    `;
}