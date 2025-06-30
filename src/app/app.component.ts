import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AppModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mini-project';
}
