import '../common.css';

const getHeaderComponentStyle = () => {
  return `
  <style>
      @import url('../common.css');

      .header {
        background-color: var(--light-gray-background);
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.125rem;
        padding-top: 1.125rem;
      }
      .header__img {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 3.2rem;
      }
      .header__name {
        font-size: 1.5rem;
      }
      .header__status {
        font-size: 0.75rem;
        color: #707070;
      }
   
   </style>
  `
}

export { getHeaderComponentStyle } 