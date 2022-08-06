import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
    teacherForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private crudService:CrudService,
    private ngZone:NgZone,
    private router:Router
  ) 
  { 
    this.teacherForm = this.formBuilder.group({
      name:[''],
      age:[''],
      degree:[''],
      address:['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit():any{
    this.crudService.AddTeacher(this.teacherForm.value)
    .subscribe(()=>{
      console.log(`Data Added successfully`)
      this.ngZone.run(()=>this.router.navigateByUrl('/teacher-list'))
    },(err)=>{
      console.log(err)
    })
  }
}
