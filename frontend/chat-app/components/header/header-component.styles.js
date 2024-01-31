export function getHeaderComponentStyles() {

  return `
 <style>
    @import url('https://fonts.googleapis.com/css2?family=Inika:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    @import url('/style.css');
    
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