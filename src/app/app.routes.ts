import { Routes } from '@angular/router';

import { RickAndMortyListComponent } from './RickAndMorty/rick-and-morty-list/rick-and-morty-list';
import { RickAndMortyDetailComponent } from './RickAndMorty/rick-and-morty-detail/rick-and-morty-detail';

import { SimpsonsListComponent } from './Simpsons/simpsons-list/simpsons-list';
import { SimpsonsDetailComponent } from './Simpsons/simpsons-detail/simpsons-detail';

import { DragonBallListComponent } from './DragonBall/dragon-ball-list/dragon-ball-list';
import { DragonBallDetailComponent } from './DragonBall/dragon-ball-detail/dragon-ball-detail';

export const routes: Routes = [
  { path: 'rick', component: RickAndMortyListComponent },
  { path: 'rick/:id', component: RickAndMortyDetailComponent },

  { path: 'simpsons', component: SimpsonsListComponent },
  { path: 'simpsons/:id', component: SimpsonsDetailComponent },

  { path: 'dragon', component: DragonBallListComponent },
  { path: 'dragon/:id', component: DragonBallDetailComponent },

  { path: '**', redirectTo: 'rick' }
];
