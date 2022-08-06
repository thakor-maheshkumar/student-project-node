import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';
import { DepartMentListComponent } from './components/depart-ment-list/depart-ment-list.component';
import { DepartmentaddComponent } from './components/departmentadd/departmentadd.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentDetailComponent,
    TeacherListComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    DepartMentListComponent,
    DepartmentaddComponent,
    DepartmentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
