import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar"

export const TarefaRoutes: Routes = [
// definindo as rotas da aplicação
    {
        path : 'tarefas' ,
        redirectTo : 'tarefas/listar'
    },
    {
        path : 'tarefas/listar' ,
        component : ListarTarefaComponent
    },
];