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
      background-color: #EEEEEE;
      padding-top: 1rem;
    }
    
    .header-profile-name-cover {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.188rem;
    }
    
    .header-profile-name-text {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 0.75rem;
      color: #1E1E1E;
    }
    
    .header-profile-status-paragraph {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 2rem;
      color: #707070;
    }
  
  </style>
 `
}