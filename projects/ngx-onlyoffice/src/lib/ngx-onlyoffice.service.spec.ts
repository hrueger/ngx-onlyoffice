import { TestBed } from '@angular/core/testing';

import { NgxOnlyofficeService } from './ngx-onlyoffice.service';

describe('NgxOnlyofficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxOnlyofficeService = TestBed.get(NgxOnlyofficeService);
    expect(service).toBeTruthy();
  });
});
