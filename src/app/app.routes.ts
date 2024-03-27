import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

export const routes: Routes = [{
  path: '', //TODO: localhost:4200
  //component: HomePageComponent,
  loadChildren: () => import(`./modules/home/home.routes`).then(m => m.homeRoutes),
}];
