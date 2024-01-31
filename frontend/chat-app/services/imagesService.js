export function imagesService () {
  // Вместо асинхронной функции с fetch запросом пока что мок с обычной переменной
  
  function getImage() {
    let response = 'public/images/profile-img.png'
    return response;
  }

  return {
    getImage
  }
}