// servico que executa as operacoes

import { Injectable } from '@angular/core';

// informa que a classe é um serviço junto com o import core
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService { 

  /* Define as constantes utilizadas nos cálculos */

  static readonly SOMA: string = '+' ;
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/' ;
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}

  // :number diz que o metodo retorna um valor numerico,
  // o let é equivalente ao var do Js serve para declarar variável
  // ele diz que a variável é acessivel somente dentro do metodo
  calcular(num1: number , num2: number , operacao: string): number {
    let resultado: number ;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2 ;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
