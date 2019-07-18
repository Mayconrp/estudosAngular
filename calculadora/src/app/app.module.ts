import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// sempre que for preciso importar algum metodo ou classe, adicionar tamém aos imports:[]
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
