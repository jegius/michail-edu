import { getUserInfoStyles } from "./user-info-component.styles.js";

export function createUserInfo(userData = {}) {
  let activeStatus = userData.activity;
  let imgURL = userData.img;
  let userName = userData.name;


  let activeStatusSpan;

  if (activeStatus) {
    activeStatusSpan = 'Active'
  } else {
    activeStatusSpan = 'Inactive'
  }

  
  let profileStatusImgElement = '<div></div>'
  
  if (activeStatus) {
    profileStatusImgElement = '<div class="user-info-activity-dot"></div>'
  } else {
    profileStatusImgElement = '<div class="user-info-activity-dot-inactive"></div>'
  }

  let profileImgElement;

  if (imgURL !== '') {
    profileImgElement = `<img src="${imgURL}" alt="" class='user-info-photo'>`
  } else {
    profileImgElement = `<p class='user-info-img-letter'>${userName[0]}</p>`
  }

    return `
    ${getUserInfoStyles()}
      <div class="user-info-cover">
      
        <div class="user-info-photo-cover"> 
          ${profileImgElement}
          ${profileStatusImgElement}
        </div>

        <div class="user-info-name-cover">
          <h2 class="user-info-name-text">${userName}</h2>
          <span class="user-info-activity-span">${activeStatusSpan}</span>
        </div>

      </div>
    `;
}