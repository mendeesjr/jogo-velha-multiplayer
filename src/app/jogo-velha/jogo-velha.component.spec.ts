import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoVelhaComponent } from './jogo-velha.component';
import { JogoVelhaService } from './shared';

describe('JogoVelhaComponent', () => {
  let component: JogoVelhaComponent;
  let fixture: ComponentFixture<JogoVelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoVelhaComponent ],
      providers: [ JogoVelhaService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
