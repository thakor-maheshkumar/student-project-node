import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Department } from 'src/app/service/Department';
@Component({
  selector: 'app-depart-ment-list',
  templateUrl: './depart-ment-list.component.html',
  styleUrls: ['./depart-ment-list.component.css']
})
export class DepartMentListComponent implements OnInit {
  Department:any=[];
 // Students:any=[]

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetDepartments().subscribe((res)=>{
      console.log("Department fetch successfully");
      this.Department=res;
    })
  }
onDelete(id:any,i:any):any{
  if(window.confirm("Are you sure want to deletes this record")){
    this.crudService.DeleteDepartment(id).subscribe((res)=>{
      console.log("Department deleted successfully")
      console.log(i);
      this.Department.splice(i,1)
    },(err)=>{
      console.log(err)
    })
  }
    
}
}
