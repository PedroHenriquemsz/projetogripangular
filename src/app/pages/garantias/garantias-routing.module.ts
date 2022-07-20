import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HistoricoComponent } from './historico/historico.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitacaoGarantiaComponent } from './solicitacao-garantia/solicitacao-garantia.component';
import { TermoGarantiaComponent } from './termo-garantia/termo-garantia.component';

const routes: Routes = [
  {path: '', component: HistoricoComponent},
  {path: 'detalhe', component: DetalheComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'termo', component: TermoGarantiaComponent},
  {path: 'solicitacao', component: SolicitacaoGarantiaComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarantiasRoutingModule { }
