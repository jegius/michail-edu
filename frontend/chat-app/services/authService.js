export function authService () {

  // пока моковые login и logout, потому что этот функционал еще нигде не реализован, чтобы работало

  let auth;
  
  function login() {
    auth = true
  }

  function logout() {
    auth = false
  }

  async function getCurrentUser$() {
    let response = {
      activity: true,
      img: 'public/images/profile-img.png',
      name: 'Ope'
    }
    return response
  }

  return {
    getCurrentUser$
  }
}