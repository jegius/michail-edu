import { getUserInfoBlockComponentStyle } from "./user-info-block.styles"




export function createUserInfoBlockTemplate (props) {
  if (!props) {
    return null
  }
  const {name, avatar, status} = props;
  return (`
  ${getUserInfoBlockComponentStyle()}
  <div class="user-info">
    <img class="user-info__img" src="${avatar}" alt='avatar'/>
    <div>
      <div class="user-info__name">${name}</div>
      <div class="user-info__status">${status}</div>
    </div>
  </div>
  `)
}