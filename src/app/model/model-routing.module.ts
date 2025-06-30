import { input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengComponent } from './primeng/primeng.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ModelComponent } from './model.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputOutputBindingComponent } from '../input-output-binding/input-output-binding.component';
import path from 'node:path';

const routes: Routes = [
  {
    path: '',
    component: ModelComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      {
        path: 'primeng',
        component: PrimengComponent,
      },
      {
        path: 'user',
        component: UserFormComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
      {
        path: 'input-binding',
        component: InputOutputBindingComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelRoutingModule {}
