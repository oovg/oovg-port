import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorksComponent } from './components/works/works.component';
import { WorkDetailComponent } from './components/works/work-detail.component'; 

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'works',
    component: WorksComponent,
  },
  {
    path: 'works/:id',
    component: WorkDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

export const router = RouterModule.forRoot(routes);
