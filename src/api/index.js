
import ajax from './ajax';
const Http = ''


export function reqLogin(username,password) {
  return ajax(Http+'/login',{username ,password},'POST')
}