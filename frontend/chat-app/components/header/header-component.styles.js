export function getHeaderComponentStyles() {

  return `
 <style>
    @import url('../common.css');
    
    .center, .header, .header-profile-name-cover, .header-profile-name-text, .header-profile-status-paragraph {
      font-size: 16px;
      text-decoration: none;
      padding: 0rem;
      margin: 0rem;
      font-family: Inter;
    }
    
    .center {
      padding-left: calc(50% - 40.625rem);
      padding-right: calc(50% - 40.625rem);
    }
    
    .header {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      margin-top: 1.25rem;
    }
    
    .header-profile-name-cover {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.188rem;
    }
    
    .header-profile-name-text {
      font-weight: 500;
      font-size: 1,5rem;
      line-height: 1rem;
      color: var(--gray-color);
    }
    
    .header-profile-status-paragraph {
      font-weight: 400;
      font-size: 0,5rem;
      line-height: 2rem;
      color: var(--black-color);
    }
  
  </style>
 `
}