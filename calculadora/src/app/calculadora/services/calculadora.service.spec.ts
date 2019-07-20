import { TestBed, inject } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
});


  // testando a classe do service responsável pelos cáculos
  it('deve garantir que 1 + 4 = 5' ,
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1,4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
    })
  );