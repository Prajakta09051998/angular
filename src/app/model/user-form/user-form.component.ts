import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-form',
  imports: [InputTextModule, CardModule, ButtonModule,FormsModule,ReactiveFormsModule, CommonModule, TableModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  standalone: true
})
export class UserFormComponent {
  userForm!: FormGroup;
  getCarData: any[] = [];
  http = inject(HttpClient)

   constructor(
    private fb: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getcarList();
    this.getUsersData();
    this.createForm();
  }
  carobj: any = 
  {
     "CarId": 0,
      "Brand": "",
      "Model": "",
      "Year": 0,
      "Color": "",
      "DailyRate": 0,
      "CarImage": "",
      "RegNo": ""
    }
  userDataForm: any = {
    fname: '',
    lname: '',
    username: '',
    city: '',
    zipcode: '',
  }

  createForm() {
    this.userForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    debugger
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this._router.navigate(['/user-list']);
    }
    else {
       this.http.post("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewCar", this.carobj).subscribe((res: any) => {
        if(res.result) {
          console.log('Car created successfully', res);
          this.getcarList();
        }
        else {
          console.error('Error creating car', res);
          alert(res.message);
        }
    })
    }
   
  }

  getcarList() {
    console.log('getUsers called');
    this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe((res: any)=>{
      this.getCarData = res?.data;
      console.log(this.getCarData,'carlist');
    })
  }
 userList: any[] = [];
  getUsersData() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      // const maxUserId = res.length ? Math.max(...res.map((u: { userid: any; }) => u.userid || 0)) : 0;
      // this.userobj.userid = maxUserId + 1;
      this.userList = res;
      console.log(this.userList,'swagger');
    })
  }
  onEdit(data: any) {
    this.carobj = data;
  }
}
