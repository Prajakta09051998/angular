import { Routes } from '@angular/router';
import { ModelComponent } from './model/model.component';

export const routes: Routes = [
  {
    path: 'models',
    loadChildren: () =>
      import('./model/model.module').then((m) => m.ModelModule),
  },
];
