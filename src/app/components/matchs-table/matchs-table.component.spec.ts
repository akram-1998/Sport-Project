import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsTableComponent } from './matchs-table.component';

describe('MatchsTableComponent', () => {
  let component: MatchsTableComponent;
  let fixture: ComponentFixture<MatchsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
