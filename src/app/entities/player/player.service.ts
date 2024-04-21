import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  public getAllPlayers(){
    return this.http.get("http://localhost:8083/player")
  }

}
