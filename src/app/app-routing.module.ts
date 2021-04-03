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
  {
    path: 'participante',
    loadChildren: () => import('./participante/participante.module').then( m => m.ParticipantePageModule)
  },
  {
    path: 'add-participante-turma/:curso',
    loadChildren: () => import('./add-participante-turma/add-participante-turma.module').then( m => m.AddParticipanteTurmaPageModule)
  },
  {
    path: 'escolher-servidor-alunos',
    loadChildren: () => import('./escolher-servidor-alunos/escolher-servidor-alunos.module').then( m => m.EscolherServidorAlunosPageModule)
  },
  {
    path: 'add-participante-servidor',
    loadChildren: () => import('./add-participante-servidor/add-participante-servidor.module').then( m => m.AddParticipanteServidorPageModule)
  },
  {
    path: 'escolher-tecnicos-servidor',
    loadChildren: () => import('./escolher-tecnicos-servidor/escolher-tecnicos-servidor.module').then( m => m.EscolherTecnicosServidorPageModule)
  },
  {
    path: 'add-participante-professor',
    loadChildren: () => import('./add-participante-professor/add-participante-professor.module').then( m => m.AddParticipanteProfessorPageModule)
  },
  {
    path: 'eventos-responsavel-votacao',
    loadChildren: () => import('./eventos-responsavel-votacao/eventos-responsavel-votacao.module').then( m => m.EventosResponsavelVotacaoPageModule)
  },
  {
    path: 'eventos-escolher-prof-serv',
    loadChildren: () => import('./eventos-escolher-prof-serv/eventos-escolher-prof-serv.module').then( m => m.EventosEscolherProfServPageModule)
  },
  {
    path: 'eventos-responsavel-servidor',
    loadChildren: () => import('./eventos-responsavel-servidor/eventos-responsavel-servidor.module').then( m => m.EventosResponsavelServidorPageModule)
  },
  {
    path: 'eventos-responsavel-professor',
    loadChildren: () => import('./eventos-responsavel-professor/eventos-responsavel-professor.module').then( m => m.EventosResponsavelProfessorPageModule)
  },
  {
    path: 'eventos-representante',
    loadChildren: () => import('./eventos-representante/eventos-representante.module').then( m => m.EventosRepresentantePageModule)
  },
  {
    path: 'eventos-escolher-representante',
    loadChildren: () => import('./eventos-escolher-representante/eventos-escolher-representante.module').then( m => m.EventosEscolherRepresentantePageModule)
  },
  {
    path: 'eventos-escolher-representante-curso',
    loadChildren: () => import('./eventos-escolher-representante-curso/eventos-escolher-representante-curso.module').then( m => m.EventosEscolherRepresentanteCursoPageModule)
  },
  {
    path: 'eventos-escolher-representante-turma',
    loadChildren: () => import('./eventos-escolher-representante-turma/eventos-escolher-representante-turma.module').then( m => m.EventosEscolherRepresentanteTurmaPageModule)
  },
  {
    path: 'eventos-titulo',
    loadChildren: () => import('./eventos-titulo/eventos-titulo.module').then( m => m.EventosTituloPageModule)
  },
  {
    path: 'imagem-votacao',
    loadChildren: () => import('./imagem-votacao/imagem-votacao.module').then( m => m.ImagemVotacaoPageModule)
  },
  {
    path: 'criador-votacao',
    loadChildren: () => import('./criador-votacao/criador-votacao.module').then( m => m.CriadorVotacaoPageModule)
  },
  {
    path: 'relatorio-votacao',
    loadChildren: () => import('./relatorio-votacao/relatorio-votacao.module').then( m => m.RelatorioVotacaoPageModule)
  },
  { 
    path: 'relatorio-votacao/:id', 
    loadChildren: () => import('./relatorio-votacao/relatorio-votacao.module').then( m => m.RelatorioVotacaoPageModule)
  },  {
    path: 'votacao-encerrada',
    loadChildren: () => import('./votacao-encerrada/votacao-encerrada.module').then( m => m.VotacaoEncerradaPageModule)
  },




 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
