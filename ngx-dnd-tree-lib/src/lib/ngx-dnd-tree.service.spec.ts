import { TestBed } from '@angular/core/testing';

import { NgxDndTreeService } from './ngx-dnd-tree.service';

describe('NgxDndTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDndTreeService = TestBed.get(NgxDndTreeService);
    expect(service).toBeTruthy();
  });
});
