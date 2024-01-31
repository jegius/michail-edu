export function activityService () {
  // Вместо асинхронной функции с fetch запросом пока что мок с обычной переменной
  
  function getActivity() {
    let response = true
    return response;
  }

  return {
    getActivity
  }
}