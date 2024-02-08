import { EventObserver } from "../utils/observer"

export function authService () {

  async function getCurrentUser$() {
    let response = {
      firstName: 'Ivan',
      lastName: 'Alekseev',
      nickName: 'Ope',
      email: '',
      password: '',
      isActive: true,
      avatar: 'public/images/profile-img.png'
    }
    return response
  }

  function login () {
    EventObserver.subscribe(getCurrentUser$())
  }

  function logout() {
    EventObserver.unsubscribe(getCurrentUser$())
  }

  return {
    getCurrentUser$,
    login,
    logout
  }
}