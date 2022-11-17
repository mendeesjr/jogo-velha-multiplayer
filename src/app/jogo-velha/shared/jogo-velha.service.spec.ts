import { TestBed } from '@angular/core/testing';

import { JogoVelhaService } from './jogo-velha.service';

describe('JogoVelhaService', () => {
  let service: JogoVelhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoVelhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
