import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AppModule {}