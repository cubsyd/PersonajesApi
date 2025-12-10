import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpsonsApiService } from '../../Services/simpsons-api';

@Component({
  selector: 'app-simpsons-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpsons-list.html'
})
export class SimpsonsListComponent implements OnInit {

  characters: any[] = [];

  constructor(private api: SimpsonsApiService) {}

  ngOnInit(): void {
    this.api.getCharacters().subscribe(data => {
      console.log('Simpsons:', data);
      this.characters = data;
    });
  }
}
