import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDashboardComponent } from './heroes-dashboard.component';

describe('HeroesDashboardComponent', () => {
  let component: HeroesDashboardComponent;
  let fixture: ComponentFixture<HeroesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
