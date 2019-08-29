import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  // retorna lista (array) de tarefas 
  listarTodos(): Tarefa [] {
    const tarefas = localStorage['tarefas']; 
    // se existir tarefas retorna o json com a lista de tarefas, se não retorna o array vazio
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa : Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa); // adiciona a tarefa no final da lista
    localStorage['tarefas'] = JSON.stringify(tarefas); // convertendo tarefas e guardando no localStrorage
  }


}
