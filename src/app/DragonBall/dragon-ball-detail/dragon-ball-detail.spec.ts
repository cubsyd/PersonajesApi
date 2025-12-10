import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallDetail } from './dragon-ball-detail';

describe('DragonBallDetail', () => {
  let component: DragonBallDetail;
  let fixture: ComponentFixture<DragonBallDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
