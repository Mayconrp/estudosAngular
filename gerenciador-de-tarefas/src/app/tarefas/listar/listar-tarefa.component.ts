import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService : TarefaService) { }
   
  ngOnInit() {
  //é chamado pelo angular logo após a criação do construtor 
    this.tarefas = this.listarTodos(); 
    /* this.tarefas = [
      new Tarefa(1 , "tarefa 1" , false),
      new Tarefa(2 , "tarefa 2" , true)
    ] */
  }

  listarTodos(): Tarefa [] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any , tarefa : Tarefa): void{
    $event.preventDefault();
    if (confirm('Deseja remover tarefa "'+ tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
  
  cadastrar ( ){
    
  }

}
