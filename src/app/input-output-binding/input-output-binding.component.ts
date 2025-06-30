import { NgIf, NgForOf } from '@angular/common';
import { Component, EventEmitter, input, Input, Output, } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-input-output-binding',
  imports: [ButtonModule],
  templateUrl: './input-output-binding.component.html',
  styleUrl: './input-output-binding.component.scss'
})
export class InputOutputBindingComponent {
  @Input() IsProgress: number = 30;
  @Input() tabList: string[] = [];
  @Output() onTabClicked = new EventEmitter<string>();

  onTabChange(tab: string) {
    debugger
    this.onTabClicked.emit(tab);
  }
}
