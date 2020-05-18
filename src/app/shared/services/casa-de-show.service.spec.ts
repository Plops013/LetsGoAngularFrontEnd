import { TestBed } from '@angular/core/testing';

import { CasaDeShowService } from './casa-de-show.service';

describe('CasaDeShowService', () => {
  let service: CasaDeShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasaDeShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
