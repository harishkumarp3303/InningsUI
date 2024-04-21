import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{

  players:any=[]

  constructor(private playerservice:PlayerService){

  }
  ngOnInit(): void {
    this.playerservice.getAllPlayers().subscribe((data)=>{
      this.players=data
      console.log(this.players)
    })
  }


 
  


}
