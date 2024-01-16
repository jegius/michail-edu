import { getProfileImgComponentStyles } from "./profile-img-component.styles";

  // let profileStatusImgElement = document.querySelector('.header-profile-status-dot')
  
  // if (activeStatus) {
  //   profileStatusImgElement.classList.add('header-profile-status-img-inactive')
  // } else {
  //   profileStatusImgElement.classList.remove('header-profile-status-img-inactive')
  // }

  // let profilePhotoCover = document.querySelector('.header-profile-photo-cover');
  // let profileImgElement;

  // if (profileImgSrc !== '') {
  //   profileImgElement = document.createElement('img');
  //   profileImgElement.src = profileImgSrc;
  //   profilePhotoCover.append(profileImgElement);
  //   profileImgElement.classList.add('header-profile-photo');
  // } else {
  //   profileImgElement = document.createElement('h1');
  //   profileImgElement.textContent = userName[0];
  //   profilePhotoCover.append(profileImgElement);
  //   profileImgElement.classList.add('header-profile-img-letter');
  // }

export function createProfileImg(imgURL, activityStatus, userName) {

  let profileStatusDot = '<div class="header-profile-status-dot"></div>'
  
  if (!activityStatus) {
    profileStatusDot = '<div class="header-profile-status-dot header-profile-status-img-inactive"></div>'
  } else {
    profileStatusDot = '<div class="header-profile-status-dot"></div>'
  }

  let profileImgElement;

  // imgURL = ''

  if (imgURL !== '') {
    profileImgElement = `<img src=${imgURL} alt="" class="header-profile-photo">`
  } else {
    profileImgElement = `<h1 class="header-profile-img-letter">${userName[0]}</h1>`
  }

    return `
    ${getProfileImgComponentStyles()}
    
      <div class="header-profile-photo-cover"> 
        ${profileImgElement}
        ${profileStatusDot}
      </div>
    `;
}