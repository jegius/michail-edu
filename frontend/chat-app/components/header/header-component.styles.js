export function getHeaderComponentStyles() {

  return `
 <style>
    @import url('/common.css');
    
    .header {
      font-size: 16px;
      text-decoration: none;
      padding: 0;
      margin: 0;
      font-family: Inter;
      display: flex;
      justify-content: center;
      margin-top: 1.25rem;
      background-color: var(--white-color);
      padding-top: 1rem;
    }
  
  </style>
 `
}