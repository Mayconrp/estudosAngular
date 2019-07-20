import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';
 
@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule  
  ],
  // informa ao app.module.ts que esse cara existe
  exports: [
    CalculadoraComponent
  ],
  // adicionando o servico ao projeto
  providers:[
    CalculadoraService
  ]
})
export class CalculadoraModule {

}
