import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyApiService } from '../../Services/rick-and-morty-api';
import { RickAndMortyListModel } from '../../models/RickAndMortyModels/rick-and-morty-list-model.Model';

@Component({
  selector: 'app-rick-and-morty-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rick-and-morty-list.html',
  styleUrls: ['./rick-and-morty-list.scss']
})
export class RickAndMortyListComponent implements OnInit {

  characters: RickAndMortyListModel[] = [];

  constructor(private api: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.api.getCharacters().subscribe((res: { results: RickAndMortyListModel[] }) => {
      this.characters = res.results;
    });
  }
}
