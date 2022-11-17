import { Component, OnInit } from '@angular/core';
import { JogoVelhaService } from './shared'

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.css']
})
export class JogoVelhaComponent implements OnInit {

  constructor(private jogoVelhaService : JogoVelhaService) { }

  ngOnInit(): void {
    this.jogoVelhaService.inicializar();
  }

  get showInicio(): boolean {
    return this.jogoVelhaService.showInicio;
  }

  get showFinal(): boolean {
    return this.jogoVelhaService.showFinal;
  }

  get showTabuleiro(): boolean {
    return this.jogoVelhaService.showTabuleiro;
  }

  iniciarJogo(): void {
    this.jogoVelhaService.iniciarJogo();
  }

  jogar(posX: number, posY: number) : void {
    this.jogoVelhaService.jogar(posX,posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogoVelhaService.exibirX(posX,posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogoVelhaService.exibirO(posX,posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoVelhaService.exibirVitoria(posX,posY);
  }

  get jogador(): number {
    return this.jogoVelhaService.jogador;
  }

  novoJogo(): void {
    this.jogoVelhaService.novoJogo();
  }

}
