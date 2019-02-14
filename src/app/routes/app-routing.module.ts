import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultComponent } from './consult/consult.component';
import { LegalesComponent } from './legales/legales.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'legales', component: LegalesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ContactComponent, ConsultComponent, LegalesComponent, NotFoundComponent]
})
export class AppRoutingModule {}
