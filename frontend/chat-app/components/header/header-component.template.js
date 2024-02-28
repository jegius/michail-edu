import { getHeaderComponentStyle } from "./header-component.styles";

const defaultAvatar = 'https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149760515.jpg?t=st=1709056676~exp=1709060276~hmac=55f551634adbc78dfe62163921b8fd5ae89b2d05a7ef69f29f5cb3043d09ef1d&w=1380'

export function createHeaderTemplate ({name = 'Olga', avatar = defaultAvatar, status = 'Active'}) {
return (
  `
  ${getHeaderComponentStyle()}
  <header class="header">
  <img class="header__img" src="${avatar}" alt='avatar'/>
  <div>
    <div class="header__name">${name}</div>
    <div class="header__status">${status}</div>
  </div>
</header>
  `
)
}