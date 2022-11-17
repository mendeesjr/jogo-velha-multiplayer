import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoVelhaModule } from './jogo-velha';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JogoVelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
