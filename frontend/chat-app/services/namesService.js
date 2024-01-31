export function namesService () {
  // Вместо асинхронной функции с fetch запросом пока что мок с обычной переменной

  function getUserName() {
    let response = 'Ope'
    return response;
  } 

  return {
    getUserName
  }
}