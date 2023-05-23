import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //per fare una chiamata per avere un utente per id
  apiUrl = 'https://randomuser.me/api/?seed=usersapp&results=10&inc=email,gender,name,nat,picture,dob,phone,login&info';
  constructor(private http: HttpClient) {
 }
 getUsers(){
  return this.http.get(this.apiUrl);
 }
}
