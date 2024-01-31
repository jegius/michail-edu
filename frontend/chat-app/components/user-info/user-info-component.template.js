import { getUserInfoStyles } from "./user-info-component.styles.js";

export function createUserInfo(imgURL, userName, activeStatus) {
  // let profileStatusImgElement = this.shadowRoot.querySelector('.user-info-activity-dot')
  
  //   if (this.#activityStatusService) {
  //     profileStatusImgElement.classList.remove('user-info-activity-dot-inactive')
  //   } else {
  //     profileStatusImgElement.classList.add('user-info-activity-dot-inactive')
  //   }
  
  //   let profilePhotoCover = this.shadowRoot.querySelector('.user-info-photo-cover');
  //   let profileImgElement;
  
  //   if (this.#imagesService !== '') {
  //     profileImgElement = document.createElement('img');
  //     profileImgElement.src = this.#imagesService;
  //     profilePhotoCover.append(profileImgElement);
  //     profileImgElement.classList.add('user-info-photo');
  //   } else {
  //     profileImgElement = document.createElement('p');
  //     profileImgElement.textContent = this.#namesService[0];
  //     profilePhotoCover.append(profileImgElement);
  //     profileImgElement.classList.add('user-info-img-letter');
  //   }

  let activeStatusSpan;

  if (activeStatus) {
    activeStatusSpan = 'Active'
  } else {
    activeStatusSpan = 'Inactive'
  }


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