import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyDetail } from './rick-and-morty-detail';

describe('RickAndMortyDetail', () => {
  let component: RickAndMortyDetail;
  let fixture: ComponentFixture<RickAndMortyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
