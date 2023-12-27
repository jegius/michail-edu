export function getHeaderComponentStyles() {

  

  return `
 <style>
    @import url('../common.css');
    
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
    
    .header-profile-photo{
      background-image: url('public/images/profile-img.png');
      width: 38px;
      height: 39px;
    }
    
    .header-profile-status-img{
      background-image: url('public/images/active-dot.png');
      width: 10px;
      height: 10px;
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
      font-size: 1,5rem;
      line-height: 1rem;
      color: var(--gray-color);
    }
    
    .header-profile-status-paragraph{
      font-weight: 400;
      font-size: 0,5rem;
      line-height: 2rem;
      color: var(--black-color);
    }
  
  </style>
 `
}