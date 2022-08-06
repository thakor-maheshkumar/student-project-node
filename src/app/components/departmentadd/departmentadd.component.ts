import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.css']
})
export class DepartmentaddComponent implements OnInit {
Teachers:any=[];
departmentForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService:CrudService) {
      this.departmentForm=this.formBuilder.group({
        teacher:[''],
        department:[''],
      })
     }

  ngOnInit(): void {
    this.crudService.GetTeachers().subscribe(res=>{
      this.Teachers=res;
    })
  }
  onSubmit():any{
    this.crudService.AddDepartment(this.departmentForm.value)
    .subscribe(()=>{
      this.ngZone.run(()=>this.router.navigateByUrl('department-list'))
    },(err)=>{
      console.log(err)
    })

  }
  

}
