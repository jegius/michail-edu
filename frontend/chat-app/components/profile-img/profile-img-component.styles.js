export function getProfileImgComponentStyles() {

  return `
 <style>
    @import url('../common.css');
    
    .header-profile-photo, .header-profile-photo-cover, .header-profile-status-dot, .header-profile-img-letter, .header-profile-status-img-inactive {
      font-size: 16px;
      text-decoration: none;
      padding: 0rem;
      margin: 0rem;
      font-family: Inter;
    }

    .header-profile-photo-cover {
      position: relative;
    }
    
    .header-profile-photo {
      background-image: url('public/images/profile-img.png');
      width: 2.375rem;
      height: 2.4rem;
    }

    .header-profile-img-letter {
      text-align: center;
      color: white;
      background-color: orange;
      border-radius: 50%;
      width: 2.375rem;
      height: 2.4rem;
    }
    
    .header-profile-status-dot {
      background: #53E04E;
      border: 0.136rem solid black;
      border-radius: 50%;
      width: 0.438rem;
      height: 0.438rem;
      position: absolute;
      right: 0.063rem;
      bottom: 0.063rem;
    }

    .header-profile-status-img-inactive {
      background: var(--light-gray-color);
      border: none;
      width: 0.7rem;
      height: 0.7rem;
    }
    
  </style>
 `
}