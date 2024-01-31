export function getUserInfoStyles() {

  return `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inika:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    @import url('/style.css');
    
    .user-info-cover, .user-info-photo, .user-info-photo-cover, .user-info-activity-dot, .user-info-img-letter, .user-info-activity-dot-inactive, .user-info-name-cover, .user-info-name-text, .user-info-activity-span {
      font-size: 16px;
      text-decoration: none;
      padding: 0;
      margin: 0;
      font-family: Inter;
    }

    .user-info-cover{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .user-info-photo-cover {
      position: relative;
    }
    
    .user-info-photo {
      width: 2.375rem;
      height: 2.4rem;
    }

    .user-info-img-letter {
      text-align: center;
      color: var(--white-color);
      background-color: var(--orange-color);
      border-radius: 50%;
      width: 2.375rem;
      height: 2.4rem;
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
    }
    
    .user-info-activity-dot {
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

    .user-info-name-cover {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.188rem;
    }
    
    .user-info-name-text {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 0.5rem;
      color: var(--black-color);
    }
    
    .user-info-activity-span {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.5rem;
      color: var(--gray-color);
    }
    
  </style>
 `
}