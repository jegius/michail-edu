import '../common.css';

const getUserInfoBlockComponentStyle = () => {
  return `
  <style>
      @import url('../common.css');
      .user-info {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
      }
      .user-info__img {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 3.2rem;
      }
      .user-info__name {
        font-size: 1.5rem;
      }
      .user-info__status {
        font-size: 0.75rem;
        color:var(--gray-text-color);
      }
   </style>
  `
}

export { getUserInfoBlockComponentStyle } 