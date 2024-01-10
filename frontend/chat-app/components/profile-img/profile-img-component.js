import { activeStatus, profileImgSrc, userName } from "../header/header-component";
import { getProfileImgComponentStyles } from "./profile-img-component.styles";


export function createProfileImg() {
  const profileStatusImgElement = document.querySelector('.header-profile-status-img')
  
  if (activeStatus) {
  profileStatusImgElement.classList.add('header-profile-status-img-inactive')
  } else {
    profileStatusImgElement.classList.remove('header-profile-status-img-inactive')
  }

  let profilePhotoCover = document.querySelector('.header-profile-photo-cover');
  let profileImgElement;

  if (profileImgSrc !== '') {
    profileImgElement = document.createElement('img');
    profileImgElement.src = profileImgSrc;
    profilePhotoCover.append(profileImgElement);
    profileImgElement.classList.add('header-profile-photo');
  } else {
    profileImgElement = document.createElement('h1');
    profileImgElement.textContent = userName[0];
    profilePhotoCover.append(profileImgElement);
    profileImgElement.classList.add('header-profile-img-letter');
  }

    return `
    ${getProfileImgComponentStyles()}
    
      <div class="header-profile-photo-cover"> 
        <div class="header-profile-photo"> 
        </div>
        <div class="header-profile-status-dot">
        </div>
      </div>

    `;
}