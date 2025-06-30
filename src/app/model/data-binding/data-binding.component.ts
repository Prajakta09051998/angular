import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputOutputBindingComponent } from "../../input-output-binding/input-output-binding.component";
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, SelectModule, NgIf, NgFor, ButtonModule, NgClass, InputOutputBindingComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  userData: string = 'Hello';
  userNumber: number = 1234;
  cities: City[] | undefined;
  selectedCity: City | undefined;
  SelectedColor: string = ''
  num1: number = 0;
  num2: number = 0;
  cityList: string [] = ["Mumbai", "Delhi", "Chennai", "Banglore"]
  isImageShow: boolean = true;
  isOrderActive: boolean = false;
  @Input() IsProgress: number = 30;
  customerTabs: string[] = ['Data Binding', 'Input Output Binding', 'Templating'];

  constructor() {}

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  showMsg() {
    alert('hi');
  }
  showErrorMsg(msg: any) {
    alert(msg);
  }
  onStateChange() {
    alert("state change")
  }

  studentList: any [] = [
    {name: 'Neha', city: 'Mumbai', IsActive: true, grade: 'A', attendance: 90},
    {name: 'Sakshi', city: 'Banglore', IsActive: false, grade: 'B', attendance: 40},
    {name: 'Prajakta', city: 'Chennai', IsActive: true, grade: 'C', attendance: 20},
    {name: 'Shlesha', city: 'Surat', IsActive: false, grade: '', attendance: 60}
  ]
  showImage() {
    this.isImageShow = !this.isImageShow;
  }
  onTabChange(tab: string) {
    debugger
  }
}
