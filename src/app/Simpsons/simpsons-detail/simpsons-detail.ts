import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpsonsApiService } from '../../Services/simpsons-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpsons-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-detail.html'
})
export class SimpsonsDetailComponent implements OnInit {

  character: any;

  constructor(
    private route: ActivatedRoute,
    private api: SimpsonsApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.api.getCharacter(id).subscribe(res => {
      this.character = res;
    });
  }
}
