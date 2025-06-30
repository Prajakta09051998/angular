import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelRoutingModule } from './model-routing.module';
import { RouterModule } from '@angular/router';
import { ModelComponent } from './model.component';



@NgModule({
  declarations: [
    ModelComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    RouterModule
  ]
})
export class ModelModule { }
