import store from 'store';

export default {
  saveUser(user){
    store.set('user_key',user)
  },
  getUser(){
    return store.get('user_key') || {}
  },
  removeUser(){
    store.remove('user_key')
  }
}



