import {getHeaderComponentStyles} from './header-component.styles.js';

export function createHeader() {
    return `
    ${getHeaderComponentStyles()}
    
    <div class="header center">
      <div class="header-profile-photo-cover"> 
        <div class="header-profile-photo"> 

        </div>
        <div class="header-profile-status-img">

        </div>
      </div>
      
      <div class="header-profile-name-cover">
          <h2 class="header-profile-name-text">Ope</h2>
          <p class="header-profile-status-paragraph">Active</p>
      </div>
    </div>
    `;
}