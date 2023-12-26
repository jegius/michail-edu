export function getHeaderComponentStyles() {
  return `
 <style>
    
     *{
      text-decoration: none;
      padding: 0px;
      margin: 0px;
      font-family: Inter;
    }
    
    .center {
      padding-left: calc(50% - 650px);
      padding-right: calc(50% - 650px);
    }
    
    .header {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      margin-top: 10px;
    }
    
    .header-profile-photo-cover{
      position: relative;
    }
    
    .header-profile-status-img{
      position: absolute;
      right: 1px;
      bottom: 1px;
    }
    
    .header-profile-name-cover{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3px;
    }
    
    .header-profile-name-text{
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #1E1E1E;
    }
    
    .header-profile-status-paragraph{
      font-weight: 400;
      font-size: 12px;
      line-height: 14,5px;
      color: #707070;
    }
  
  </style>
 `
}