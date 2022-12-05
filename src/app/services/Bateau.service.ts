
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bateau } from '../classeBateau/bateau';
const URL = 'http://localhost:3000/bateau';
@Injectable({
  providedIn: 'root'
})
export class bateauService {
 
  constructor(private http:HttpClient) { }
  getbateaux():Observable<bateau[]>{ 
    return this.http.get<bateau[]>(URL); 
  }
  getbateauById(id :number):Observable<bateau>{
    return this.http.get<bateau>(`${URL}/${id}`);
  }
  addbateau(b:bateau):Observable<bateau>{
    return this.http.post<bateau>(URL,b);
  }
  updateBateau(id:number,b:bateau):Observable<bateau>{
    return this.http.put<bateau>(URL+"/"+id,b);
  }
  deletebateau(id:number){
    return this.http.delete(URL+"/"+id);
    
  }

  }
