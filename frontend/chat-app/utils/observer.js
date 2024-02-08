export class EventObserver {
  constructor () {
    this.observers = []
  }

  subscribe (user) {
    this.observers.push(user)
  }

  unsubscribe (user) {
    this.observers = this.observers.filter(subscriber => subscriber !== user)
  }

  broadcast () {
    console.log(`Данные наблюдаемого пользователя:
    ${this.observers}`);
  }
}