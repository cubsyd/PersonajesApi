import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyList } from './rick-and-morty-list';

describe('RickAndMortyList', () => {
  let component: RickAndMortyList;
  let fixture: ComponentFixture<RickAndMortyList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
