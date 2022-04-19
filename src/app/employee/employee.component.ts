import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetails } from './employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 employeeDetails : EmployeeDetails = {
   firstName : '',
   lastName :'',
   gender:'',
   email:'',
   contactNumber: '',
   address:'',
   userName:'',
   password: '',
 }

  qualification: string[] | undefined;
  experience: string[] | undefined;
  codingLanguages: string[] | undefined;

  constructor() {

   }

  ngOnInit(): void {
     this.qualification = ["Bachelors", "SSC", "HSC"]
     this.experience = ["Fresher", "1","2","2+"];
     this.codingLanguages = ["C/C++", "Java","C#", "PHP", "Python"]
  }
  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
