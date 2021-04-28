import { TestBed } from '@angular/core/testing';

import { TareasServService } from './tareas-serv.service';

describe('TareasServService', () => {
  let service: TareasServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
