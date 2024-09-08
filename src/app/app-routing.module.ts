import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PropertiesComponent } from './properties/properties.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlyersComponent } from './flyers/flyers.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'properties', component: PropertiesComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'home', component: HomeComponent},
  {path:'flyers', component: FlyersComponent},
  {path:'pictures', component: PicturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
