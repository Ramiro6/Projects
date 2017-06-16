import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';

import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal-list/proposal-new.component';
import { ProposalShowComponent } from './proposal-show/proposal-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'documents',  component: DocumentsComponent },
  { path: 'proposals',  component: ProposalListComponent },
  { path: 'proposals/new',  component: ProposalNewComponent },
  { path: 'proposal/:id',  component: ProposalShowComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
