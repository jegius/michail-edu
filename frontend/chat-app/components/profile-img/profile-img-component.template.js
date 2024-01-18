import { getProfileImgComponentStyles } from "./profile-img-component.styles";

export function createProfileImg() {
    return `
    ${getProfileImgComponentStyles()}
    
      <div class="header-profile-photo-cover"> 
        
        <div class="header-profile-status-dot">
        </div>
      </div>
    `;
}