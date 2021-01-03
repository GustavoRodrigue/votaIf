import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosPageModule)
      },
      
      {
        path: 'conta',
        loadChildren: () => import('../conta/conta.module').then(m => m.ContaPageModule)
      },
      {
        path: 'votacao',
        loadChildren: () => import('../votacao/votacao.module').then(m => m.VotacaoPageModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../curso/curso.module').then(m => m.CursoPageModule)
      },
      {
        path: 'turmas',
        loadChildren: () => import('../turma/turma.module').then(m => m.TurmaPageModule)
      },
      {
        path: 'mais',
        loadChildren: () => import('../mais/mais.module').then(m => m.MaisPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
