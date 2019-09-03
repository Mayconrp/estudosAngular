import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
// definição das rotas de navegação do component
    {
        // se for a url inicial ela e redirecionada para listagem
        path : '',
        redirectTo : '/tarefas/listar',
        pathMatch : 'full'
    },
    ...TarefaRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})

export class AppRoutingModule {

}
