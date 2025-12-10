import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragonBallApiService } from '../../Services/dragon-ball-api';
import { DragonBallListModel } from '../../models/DragonBall/dragon-ball-list-model.Model';

@Component({
  selector: 'app-dragon-ball-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dragon-ball-list.html',
  styleUrls: ['./dragon-ball-list.scss']
})
export class DragonBallListComponent implements OnInit {

  characters: DragonBallListModel[] = [];

  constructor(private dragonBallApiService: DragonBallApiService) {}

  ngOnInit(): void {
    this.dragonBallApiService.getCharacters().subscribe((res: { items: DragonBallListModel[] }) => {
      this.characters = res.items;
    });
  }
}
