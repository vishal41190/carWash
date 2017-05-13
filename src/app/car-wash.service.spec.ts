import { TestBed, inject } from '@angular/core/testing';
import { CarWashService } from './car-wash.service';

describe('CarWashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarWashService]
    });
  });

  it('should ...', inject([CarWashService], (service: CarWashService) => {
    expect(service).toBeTruthy();
  }));
});
