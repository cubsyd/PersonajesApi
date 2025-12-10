import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallList } from './dragon-ball-list';

describe('DragonBallList', () => {
  let component: DragonBallList;
  let fixture: ComponentFixture<DragonBallList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
