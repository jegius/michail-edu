import { getAvatarLetters } from "../../utils/utils.js";
import { getUserInfoStyles } from "./user-info-component.styles.js";

export function createUserInfo({isActive, avatar, nickName, firstName = '', lastName = ''} = {}) {
  let nickLetters;
  if (firstName) {
    nickLetters = getAvatarLetters(firstName, lastName)
  } else {
    nickLetters = getAvatarLetters(nickName)
  }

    return `
    ${getUserInfoStyles()}
      <div class="user-info">
      
        <div class="user-info-photo-cover"> 
          ${avatar? `<img src=${avatar} alt="" class="user-info-photo-cover_img">` : 
          `<div class="user-info-photo-cover_letter">${nickLetters}</div>`}
          <div class="${isActive? 
            'user-info-photo-cover_activity-dot' : 
            'user-info-photo-cover_activity-dot user-info-photo-cover_activity-dot_inactive'}">
          </div>
        </div>

        <div class="user-info-name-cover">
          <h2 class="user-info-name-cover_text">${nickName}</h2>
          <span class="user-info-name-cover_activity">${isActive? 'active' : 'inactive'}</span>
        </div>

      </div>
    `;
}