import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  Students:any=[]
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetStudents().subscribe(res=>{
        console.log(res);
        this.Students=res;
    })
  }
  delete(id:any,i:any){
    this.crudService.DeleteStudent(id).subscribe((res)=>{
      this.Students.splice(i,1)
    })
  }
}
