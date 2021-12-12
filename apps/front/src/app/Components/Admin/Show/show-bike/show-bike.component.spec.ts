import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBikeComponent } from './show-bike.component';

describe('ShowBikeComponent', () => {
  let component: ShowBikeComponent;
  let fixture: ComponentFixture<ShowBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
