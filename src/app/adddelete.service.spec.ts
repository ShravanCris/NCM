import { TestBed, inject } from '@angular/core/testing';

import { AdddeleteService } from './adddelete.service';

describe('AdddeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdddeleteService]
    });
  });

  it('should be created', inject([AdddeleteService], (service: AdddeleteService) => {
    expect(service).toBeTruthy();
  }));
});
