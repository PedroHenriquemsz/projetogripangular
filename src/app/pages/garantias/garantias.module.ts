import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarantiasRoutingModule } from './garantias-routing.module';
import { GarantiasComponent } from './garantias.component';
import { ListaComponent } from './components/lista/lista.component';
import { EditorTextoComponent } from './components/editor-texto/editor-texto.component';
import { UploadArquivosComponent } from './components/upload-arquivos/upload-arquivos.component';
import { StepperUploadArquivosComponent } from './components/stepper-upload-arquivos/stepper-upload-arquivos.component';
import { VisualizadorArquivosComponent } from './components/visualizador-arquivos/visualizador-arquivos.component';
import { HistoricoComponent } from './historico/historico.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { TermoGarantiaComponent } from './termo-garantia/termo-garantia.component';
import { SolicitacaoGarantiaComponent } from './solicitacao-garantia/solicitacao-garantia.component';
import { DadosConsumidorComponent } from './solicitacao-garantia/dados-consumidor/dados-consumidor.component';
import { DadosRevendedorComponent } from './solicitacao-garantia/dados-revendedor/dados-revendedor.component';
import { MercadoriaReclamadaComponent } from './solicitacao-garantia/mercadoria-reclamada/mercadoria-reclamada.component';
import { ProgressoGarantiaComponent } from './components/progresso-garantia/progresso-garantia.component';


@NgModule({
  declarations: [
    GarantiasComponent,
    ListaComponent,
    EditorTextoComponent,
    UploadArquivosComponent,
    StepperUploadArquivosComponent,
    VisualizadorArquivosComponent,
    HistoricoComponent,
    DetalheComponent,
    TermoGarantiaComponent,
    SolicitacaoGarantiaComponent,
    DadosConsumidorComponent,
    DadosRevendedorComponent,
    MercadoriaReclamadaComponent,
    ProgressoGarantiaComponent
  ],
  imports: [
    CommonModule,
    GarantiasRoutingModule
  ]
})
export class GarantiasModule { }
