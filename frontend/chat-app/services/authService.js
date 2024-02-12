export class authService {
  constructor() {
      this.currentUser = {
        firstName: 'Ivan',
        lastName: 'Alekseev',
        nickName: 'Ope',
        email: '',
        password: '',
        isActive: true,
        avatar: 'public/images/profile-img.png'
      }; 
      this.subscribers = [];
  }

  subscribeOnCurrentUser(callback) {
      this.subscribers.push(callback);
  }

  unsubscribeFromCurrentUser(callback) {
      this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
  }
}