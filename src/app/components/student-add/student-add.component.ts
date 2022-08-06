import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService:CrudService
    ) {
      this.studentForm=this.formBuilder.group({
      name:[''],
      rollno:[''],
      address:['']
    }) 
  }

  ngOnInit(): void {
  }
  onSubmit():any{
    this.crudService.StudentAdd(this.studentForm.value)
    .subscribe(()=>{
      console.log(`Data Added successfully`)
      this.ngZone.run(()=>this.router.navigateByUrl('/student-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
