import { TestBed } from '@angular/core/testing';

import { BaremoService } from './baremo.service';

describe('BaremoService', () => {
  let service: BaremoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaremoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
