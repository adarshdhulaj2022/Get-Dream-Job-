import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsThumbnailComponent } from './jobs-thumbnail.component';

describe('JobsThumbnailComponent', () => {
  let component: JobsThumbnailComponent;
  let fixture: ComponentFixture<JobsThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
