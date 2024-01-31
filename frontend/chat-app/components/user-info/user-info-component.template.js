import { getUserInfoStyles } from "./user-info-component.styles.js";

export function createUserInfo(imgURL, userName, activeStatusSpan) {

    return `
    ${getUserInfoStyles()}
      <div class="user-info-cover">
      
        <div class="user-info-photo-cover"> 
          <div class="user-info-activity-dot">
          </div>
        </div>

        <div class="user-info-name-cover">
          <h2 class="user-info-name-text">${userName}</h2>
          <span class="user-info-activity-span">${activeStatusSpan}</span>
        </div>

      </div>
    `;
}