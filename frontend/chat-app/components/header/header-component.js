import {getHeaderComponentStyles} from './header-component.styles.js';

export function createHeader() {
    return `
    ${getHeaderComponentStyles()}
    
    <div class="header center">
      <div class="header-profile-photo-cover"> 
        <div class="header-profile-photo"> 
          <img src="public/images/profile-img.png" alt="">
        </div>
        <div class="header-profile-status-img">
          <img src="public/images/active-dot.png" alt="">
        </div>
      </div>
      
      <div class="header-profile-name-cover">
        <div class="header-profile-name"> 
          <h2 class="header-profile-name-text">Ope</h2>
        </div>
        <div class="header-profile-status-text">
          <p class="header-profile-status-paragraph">Active</p>
        </div>
      </div>
    </div>
    `;
}