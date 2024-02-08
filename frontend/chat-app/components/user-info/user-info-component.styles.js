export function getUserInfoStyles() {

  return `
  <style>
    @import url('/common.css');

    .user-info{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .user-info-photo-cover {
      position: relative;
    }
    
    .user-info-photo-cover_img {
      width: 2.375rem;
      height: 2.4rem;
    }

    .user-info-photo-cover_letter {
      text-align: center;
      color: var(--white-color);
      background-color: var(--orange-color);
      border-radius: 50%;
      width: 2.375rem;
      height: 2.4rem;
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
    }
    
    .user-info-photo-cover_activity-dot {
      background: var(--light-green-color);
      border: 0.136rem solid var(--black-color);
      border-radius: 50%;
      width: 0.438rem;
      height: 0.438rem;
      position: absolute;
      right: 0.15rem;
      bottom: 0.25rem;
    }

    .user-info-activity-dot-inactive {
      background: var(--light-gray-color);
      border: none;
      width: 0.7rem;
      height: 0.7rem;
    }

    .user-info-photo-cover_activity-dot_inactive {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.188rem;
    }
    
    .user-info-name-cover_text {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 0.5rem;
      color: var(--black-color);
      margin: 0;
    }
    
    .user-info-name-cover_activity {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.5rem;
      color: var(--gray-color);
    }
    
  </style>
 `
}