import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsDetail } from './simpsons-detail';

describe('SimpsonsDetail', () => {
  let component: SimpsonsDetail;
  let fixture: ComponentFixture<SimpsonsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpsonsDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
