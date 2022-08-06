import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';
import { DepartMentListComponent } from './components/depart-ment-list/depart-ment-list.component';
import { DepartmentaddComponent } from './components/departmentadd/departmentadd.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'student-list' },
  {path:'student-list',component:StudentListComponent},
  {path:'student-add',component:StudentAddComponent},
  {path:'student-detail/:id',component:StudentDetailComponent},
  {path:'teacher-list',component:TeacherListComponent},
  {path:'teacher-add',component:TeacherAddComponent},
  {path:'teacher-edit/:id',component:TeacherEditComponent},
  {path:'department-list',component:DepartMentListComponent},
  {path:'department-add',component:DepartmentaddComponent},
  {path:'department-edit/:id',component:DepartmentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
