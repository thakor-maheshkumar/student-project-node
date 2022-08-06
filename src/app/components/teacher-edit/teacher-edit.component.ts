import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
  getId:any;
  teacherEdit:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private crudService:CrudService,
    private activatedRoute:ActivatedRoute,
    private ngZone:NgZone
  ) 
  {
    this.getId=this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetTeacher(this.getId).subscribe((res=>{
       this.teacherEdit.setValue({
          name:res['name'],
          age:res['age'],
          degree:res['degree'],
          address:res['address']
       })

    }))
    this.teacherEdit=this.formBuilder.group({
      name:[''],
      age:[''],
      degree:[''],
      address:[''],
    
    })
   }

  ngOnInit(): void {
  }
  onUpdate():any{
      this.crudService.teacherUpdate(this.getId,this.teacherEdit.value)
      .subscribe(()=>{
        console.log(`Data Added successfully`)
        this.ngZone.run(()=>this.router.navigateByUrl('/teacher-list'))
      },(err)=>{
        console.log(err)
      })
  }
}
