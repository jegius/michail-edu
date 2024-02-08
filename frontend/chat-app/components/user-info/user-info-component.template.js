import { getUserInfoStyles } from "./user-info-component.styles.js";

export function createUserInfo({isActive, avatar, nickName, firstName = null, lastName = null} = {}) {

  const getAvatarLetters = function(userName, userLastName) {
    let nickLetters;
    if (!userLastName) {
      if (userName.length === 1) {
        nickLetters = userName[0] + userName[0]
      } else {
        nickLetters = userName[0] + userName[userName.length - 1]
      }
    } else {
      nickLetters = userName[0] + userLastName[0]
    }
    return nickLetters.toUpperCase()
  }

  let nickLetters;

  if (!firstName) {
    nickLetters = getAvatarLetters(nickName)
  } else {
    nickLetters = getAvatarLetters(firstName, lastName)
  }


    return `
    ${getUserInfoStyles()}
      <div class="user-info">
      
        <div class="user-info-photo-cover"> 
          ${avatar? '<img src='+avatar+' alt="" class="user-info-photo-cover_img">' : 
          '<div class="user-info-photo-cover_letter">'+nickLetters+'</div>'}
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