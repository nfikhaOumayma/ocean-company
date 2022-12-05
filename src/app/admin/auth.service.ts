import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
const URL = 'http://localhost:3000/users';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  success!:boolean
  constructor(private http:HttpClient) { }

  login(username:string,pwd:string):Observable<User[]>{
   return this.http.get<User[]>(URL+"?username="+username+"&pwd="+pwd);
  }

 
}
