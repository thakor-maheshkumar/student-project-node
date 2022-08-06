import { Component, NgZone, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  
  Teachers:any=[];
  getId:any;
  updateDepartment:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private crudService:CrudService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone

    ) { 
      this.getId=this.activatedRoute.snapshot.paramMap.get('id');
      this.crudService.GetDepartment(this.getId).subscribe((res)=>{
        console.log(res);
        this.updateDepartment.setValue({
          department:res.department,
          teacher:res.teacher._id
        })
      })
      this.updateDepartment=this.formBuilder.group({
        department:[''],
        teacher:['']
      })
    }

  ngOnInit(): void {
    this.crudService.GetTeachers().subscribe((res)=>{
      this.Teachers=res;
    })
  }
  onUpdate():any{
    this.crudService.UpdateDepartment(this.getId,this.updateDepartment.value)
    .subscribe(()=>{
      console.log("Departmeent updated successfully")
      this.ngZone.run(()=>this.router.navigateByUrl('/department-list'))
    })
  }


}
