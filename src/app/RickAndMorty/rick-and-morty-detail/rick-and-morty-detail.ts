import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyApiService } from '../../Services/rick-and-morty-api';
import { RickAndMortyDetailModel } from '../../models/RickAndMortyModels/rick-and-morty-detail-model.Model';

@Component({
  selector: 'app-rick-and-morty-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-and-morty-detail.html',
  styleUrls: ['./rick-and-morty-detail.scss']
})
export class RickAndMortyDetailComponent implements OnInit {

  character?: RickAndMortyDetailModel;

  constructor(
    private route: ActivatedRoute,
    private api: RickAndMortyApiService 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.api.getCharacter(id).subscribe((res: RickAndMortyDetailModel) => {
      this.character = res;
    });
  }
}
