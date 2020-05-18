import { TestBed } from '@angular/core/testing';

import { OrganizadoresResolverService } from './organizadores-resolver.service';

describe('OrganizadoresResolverService', () => {
  let service: OrganizadoresResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizadoresResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
