import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  public getAllPlayers(){
    return this.http.get("http://54.66.1.157:8080/Player-0.0.1-SNAPSHOT/player")
  }

}
