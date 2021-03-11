import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then( m => m.AlunosPageModule)
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
    path: 'add-alunos',
    loadChildren: () => import('./add-alunos/add-alunos.module').then( m => m.AddAlunosPageModule)
  },
  { path: 'add-alunos/:id/:nome/:email/:senha/:curso/:turma/:nivel', 
    loadChildren: () => import('./add-alunos/add-alunos.module').then( m => m.AddAlunosPageModule)
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
    path: 'tela-inicial',
    loadChildren: () => import('./tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  },
  {
    path: 'nivel-usuarios',
    loadChildren: () => import('./nivel-usuarios/nivel-usuarios.module').then( m => m.NivelUsuariosPageModule)
  },
  {
    path: 'professor',
    loadChildren: () => import('./professor/professor.module').then( m => m.ProfessorPageModule)
  },
  {
    path: 'servidor',
    loadChildren: () => import('./servidor/servidor.module').then( m => m.ServidorPageModule)
  },
  {
    path: 'add-professor',
    loadChildren: () => import('./add-professor/add-professor.module').then( m => m.AddProfessorPageModule)
  },
  {
    path: 'add-servidor',
    loadChildren: () => import('./add-servidor/add-servidor.module').then( m => m.AddServidorPageModule)
  },
  {
    path: 'mostrar-alunos',
    loadChildren: () => import('./mostrar-alunos/mostrar-alunos.module').then( m => m.MostrarAlunosPageModule)
  },
  {
    path: 'mostrar-alunos/:id/:nome/:email/:nivel/:cpf/:telefone/:status/:curso/:turma/:nomeCurso/:nomeTurma',
    loadChildren: () => import('./mostrar-alunos/mostrar-alunos.module').then( m => m.MostrarAlunosPageModule)
  },
  {
    path: 'mostrar-servidor/:id/:nome/:email/:nivel/:cpf/:telefone/:status',
    loadChildren: () => import('./mostrar-servidor/mostrar-servidor.module').then( m => m.MostrarServidorPageModule)
  },
  {
    path: 'tipo-votacao',
    loadChildren: () => import('./tipo-votacao/tipo-votacao.module').then( m => m.TipoVotacaoPageModule)
  },  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'eleicao',
    loadChildren: () => import('./eleicao/eleicao.module').then( m => m.EleicaoPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'add-usuario-votacao',
    loadChildren: () => import('./add-usuario-votacao/add-usuario-votacao.module').then( m => m.AddUsuarioVotacaoPageModule)
  },
  {
    path: 'add-participante-turma',
    loadChildren: () => import('./add-participante-turma/add-participante-turma.module').then( m => m.AddParticipanteTurmaPageModule)
  },

 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
