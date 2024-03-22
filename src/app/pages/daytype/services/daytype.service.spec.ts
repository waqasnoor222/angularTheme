/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DaytypeService } from './daytype.service';

describe('Service: Daytype', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaytypeService]
    });
  });

  it('should ...', inject([DaytypeService], (service: DaytypeService) => {
    expect(service).toBeTruthy();
  }));
});
