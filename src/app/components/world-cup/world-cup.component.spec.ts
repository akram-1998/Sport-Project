import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCupComponent } from './world-cup.component';

describe('WorldCupComponent', () => {
  let component: WorldCupComponent;
  let fixture: ComponentFixture<WorldCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
