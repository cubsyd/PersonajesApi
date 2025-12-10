import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsList } from './simpsons-list';

describe('SimpsonsList', () => {
  let component: SimpsonsList;
  let fixture: ComponentFixture<SimpsonsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpsonsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
