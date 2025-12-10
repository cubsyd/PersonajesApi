import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DragonBallApiService } from '../../Services/dragon-ball-api';
import { DragonBallDetailModel } from '../../models/DragonBall/dragon-ball-detail-model.Model.js';

@Component({
  selector: 'app-dragon-ball-detail',
  standalone: true,
  imports: [CommonModule],   // necesario para *ngIf
  templateUrl: './dragon-ball-detail.html',
  styleUrls: ['./dragon-ball-detail.scss']
})
export class DragonBallDetailComponent implements OnInit {

  character?: DragonBallDetailModel;

  constructor(
    private route: ActivatedRoute,
    private api: DragonBallApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.api.getCharacter(id).subscribe((res: DragonBallDetailModel) => {
      this.character = res;
    });
  }
}
