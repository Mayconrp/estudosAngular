import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  // retorna lista (array) de tarefas 
  listarTodos (): Tarefa[] {
    const tarefas = localStorage['tarefas']; 
    // se existir tarefas retorna o json com a lista de tarefas, se não retorna o array vazio
    return tarefas ? JSON.parse(tarefas) : [] ;
  } 

  cadastrar (tarefa : Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa); // adiciona a tarefa no final da lista
    localStorage['tarefas'] = JSON.stringify(tarefas); // convertendo tarefas e guardando no localStrorage
  }

  buscarPorId (id: number) : Tarefa {
    const tarefas : Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar (tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();

    tarefas.forEach((obj , index , objs) => {
      if (tarefa.id === obj.id){
        obj[index] = tarefa;
      }
    });

    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover (id: number): void {
    // let escopo local
    let tarefas: Tarefa[] = this.listarTodos();
    // o filter é uma variação do find
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alteraStatus (id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj , index , objs) => {
      if (id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }





  
}
