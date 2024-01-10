import { createProfileImg } from '../profile-img/profile-img-component.js';
import {getHeaderComponentStyles} from './header-component.styles.js';

export let userName = 'Ope';

export let activeStatus = true;

export let profileImgSrc = "public/images/profile-img.png";

let profileImgElem = document.createElement("headerImg");

profileImgElem = createProfileImg();

let activeStatusSpan;

if (activeStatus) {
  activeStatusSpan = 'Active'
} else {
  activeStatusSpan = 'Inactive'
}

export function createHeader() {
    return `
    ${getHeaderComponentStyles()}
    
    <div class="header center">
      ${profileImgElem}
      
      <div class="header-profile-name-cover">
          <h2 class="header-profile-name-text">${userName}</h2>
          <span class="header-profile-status-paragraph">${activeStatusSpan}</span>
      </div>
    </div>
    `;
}