import { TestBed, inject } from '@angular/core/testing';

import { EventTrackerService } from './event-tracker.service';

describe('EventTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventTrackerService]
    });
  });

  it('should be created', inject([EventTrackerService], (service: EventTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
