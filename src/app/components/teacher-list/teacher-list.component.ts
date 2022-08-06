import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
 
  Teachers:any=[];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetTeachers().subscribe(res=>{
      console.log('Data Loaded');
      this.Teachers=res;
    })
  }
  onDelete(id:any, i:any){
    if(window.confirm('Do you want to go ahead?')){
      this.crudService.teacherDelete(id,i).subscribe((res)=>{
        this.Teachers.splice(i,1)
      })
    }
  }
}
