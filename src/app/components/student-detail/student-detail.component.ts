import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  getId:any;
  updateForm:FormGroup;
  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudService:CrudService
    ) { 
      this.getId=this.activatedRoute.snapshot.paramMap.get('id');
      this.crudService.GetStudent(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          name:res['name'],
          rollno:res['rollno'],
          address:res['address']
        })
      })
      this.updateForm=this.formBuilder.group({
        name:[''],
        rollno:[''],
        address:[''],
      })
    }
  ngOnInit(): void {
  }
  onUpdate(): any {
    this.crudService.UpdateStudent(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/student-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
