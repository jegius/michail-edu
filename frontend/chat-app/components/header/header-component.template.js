import { ProfileImgComponent } from '../profile-img/profile-img-component.js';
import { createProfileImg } from '../profile-img/profile-img-component.template.js';
import {getHeaderComponentStyles} from './header-component.styles.js';

export function createHeader(imgURL, userName, activeStatus) {
  let activeStatusSpan

  if (activeStatus) {
    activeStatusSpan = 'Active'
  } else {
    activeStatusSpan = 'Inactive'
  }

  customElements.define("profile-img-component", ProfileImgComponent);

  // let profileImgElem = document.createElement("headerImg");

  // profileImgElem = createProfileImg(imgURL, activeStatus, userName);

    return `
    ${getHeaderComponentStyles()}
    
    <div class="header center">
      <profile-img-component></profile-img-component>
      
      <div class="header-profile-name-cover">
          <h2 class="header-profile-name-text">${userName}</h2>
          <span class="header-profile-status-paragraph">${activeStatusSpan}</span>
      </div>
    </div>
    `;
}