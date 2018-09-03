import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { RndComponent } from './rnd/rnd.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';

var routes =[
  {path:'', component: HomeComponent},
  {path:'blog', component: BlogComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductsComponent},
  {path:'services', component: ServicesPageComponent},
  {path:'rnd2', component: RndComponent} ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ProductsComponent,
    ServicesPageComponent,
    RndComponent,
    TeamComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
