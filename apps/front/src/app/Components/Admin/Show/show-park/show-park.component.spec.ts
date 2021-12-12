import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParkComponent } from './show-park.component';

describe('ShowParkComponent', () => {
  let component: ShowParkComponent;
  let fixture: ComponentFixture<ShowParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
