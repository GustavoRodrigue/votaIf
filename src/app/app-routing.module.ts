import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'add-usuarios',
    loadChildren: () => import('./add-usuarios/add-usuarios.module').then( m => m.AddUsuariosPageModule)
  },
  { path: 'add-usuarios/:id/:nome/:email/:senha/:curso/:turma/:nivel', 
    loadChildren: () => import('./add-usuarios/add-usuarios.module').then( m => m.AddUsuariosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'votacao',
    loadChildren: () => import('./votacao/votacao.module').then( m => m.VotacaoPageModule)
  },
  {
    path: 'criar-votacao',
    loadChildren: () => import('./criar-votacao/criar-votacao.module').then( m => m.CriarVotacaoPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'turma',
    loadChildren: () => import('./turma/turma.module').then( m => m.TurmaPageModule)
  },
  {
    path: 'add-cursos',
    loadChildren: () => import('./add-cursos/add-cursos.module').then( m => m.AddCursosPageModule)
  },
  { 
    path: 'add-cursos/:id/:nome', 
    loadChildren: () => import('./add-cursos/add-cursos.module').then( m => m.AddCursosPageModule)
  },
  {
    path: 'add-turmas',
    loadChildren: () => import('./add-turmas/add-turmas.module').then( m => m.AddTurmasPageModule)
  },
  { 
    path: 'add-turmas/:id/:nome/:curso', 
    loadChildren: () => import('./add-turmas/add-turmas.module').then( m => m.AddTurmasPageModule)
  },
  {
    path: 'add-votacao',
    loadChildren: () => import('./add-votacao/add-votacao.module').then( m => m.AddVotacaoPageModule)
  },
  {
    path: 'add-participante',
    loadChildren: () => import('./add-participante/add-participante.module').then( m => m.AddParticipantePageModule)
  },
  {
    path: 'mostrar-votacao',
    loadChildren: () => import('./mostrar-votacao/mostrar-votacao.module').then( m => m.MostrarVotacaoPageModule)
  },
  {
    path: 'mostrar-votacao/:id/:nome/:descricao/:tipo/:inicio/:terminio/:status/:curso/:turma',
    loadChildren: () => import('./mostrar-votacao/mostrar-votacao.module').then( m => m.MostrarVotacaoPageModule)
  },
  {
    path: 'mais',
    loadChildren: () => import('./mais/mais.module').then( m => m.MaisPageModule)
  },
  {
    path: 'candidato',
    loadChildren: () => import('./candidato/candidato.module').then( m => m.CandidatoPageModule)
  },
  {
    path: 'tabs-aluno',
    loadChildren: () => import('./tabs-aluno/tabs-aluno.module').then( m => m.TabsAlunoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
