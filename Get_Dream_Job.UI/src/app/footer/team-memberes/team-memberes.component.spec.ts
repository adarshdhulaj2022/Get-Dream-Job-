import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberesComponent } from './team-memberes.component';

describe('TeamMemberesComponent', () => {
  let component: TeamMemberesComponent;
  let fixture: ComponentFixture<TeamMemberesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
