import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultComponent } from './consult/consult.component';

const routes: Routes = [{
  path: '',component : HomeComponent
},
{
  path: 'contact',component : ContactComponent
},
{
  path: 'consult',component : ConsultComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ContactComponent, ConsultComponent]
})
export class AppRoutingModule { }
