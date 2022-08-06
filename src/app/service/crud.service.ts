import { Injectable } from '@angular/core';
import { Student } from './Student';
import { catchError, map, pipe } from 'rxjs';
import { Observable, throwError  } from 'rxjs';
import { Teacher } from './Teacher';
import { Department } from './Department';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  REST_API: string ='http://localhost:3000';

  httpHeaders = new HttpHeaders().set('Content-type','application/json');
  constructor(private httpClient:HttpClient) { }

  StudentAdd(data:Student): Observable<any>{
    let API_URL=`${this.REST_API}/student-add`;
    return this.httpClient.post(API_URL,data)
    .pipe(catchError(this.handleError))
  }
  GetStudents(){
    return this.httpClient.get(`${this.REST_API}/student-list`)
  }
  GetStudent(id:any):Observable<any>{
    let API_URL =`${this.REST_API}/student-detail/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(
      map((res)=>{
        return res || {};
      }),
      catchError(this.handleError)
    )
  }
  UpdateStudent(id: any, data: any): Observable<any> {
    console.log('hello');
    let API_URL =`${this.REST_API}/student-update/${id}`;
    return this.httpClient.put(API_URL,data,{headers:this.httpHeaders})
                    .pipe(catchError(this.handleError))
  }
  DeleteStudent(id:any):Observable<any>{
  let API_URL=`${this.REST_API}/student-delete/${id}`;
  return this.httpClient.delete(API_URL,{headers:this.httpHeaders})
                        .pipe(catchError(this.handleError))
  
 }

 AddTeacher(data:Teacher):Observable<any>{
  let API_URL = `${this.REST_API}/teacher-add`;
  return this.httpClient.post(API_URL,data)
                        .pipe(catchError(this.handleError))
 }
 GetTeachers(){
      return this.httpClient.get(`${this.REST_API}/teacher-list`);
 }
 GetTeacher(id:any):Observable<any>{
    let API_URL =`${this.REST_API}/teacher-edit/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(
      map((res)=>{
        return res || {};
      }),
      catchError(this.handleError)
    )
 }
 teacherUpdate(id:any,data:any):Observable<any>{
  let API_URL=`${this.REST_API}/teacher-update/${id}`;
  console.log(API_URL);
  return this.httpClient.put(API_URL,data)
                        .pipe(catchError(this.handleError))

 }
 teacherDelete(id:any, i:any):Observable<any>{
  let API_URL =`${this.REST_API}/teacher-delete/${id}`;
      return this.httpClient.delete(API_URL)
                            .pipe(catchError(this.handleError))
 }

 AddDepartment(data:Department):Observable<any>{
  let API_URL = `${this.REST_API}/department-add`;
  console.log(API_URL);
  return this.httpClient.post(API_URL,data,{headers:this.httpHeaders})
                        .pipe(catchError(this.handleError))
 }
GetDepartments():Observable<any>{
      let API_URL =`${this.REST_API}/department-list`
      return this.httpClient.get(API_URL);
}
GetDepartment(id:any):Observable<any>{
  let API_URL =`${this.REST_API}/department-edit/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(

      catchError(this.handleError)
    )
}
UpdateDepartment(id:any,data:any):Observable<any>{
    let API_URL =`${this.REST_API}/department-update/${id}`;
        return this.httpClient.put(API_URL,data,{headers:this.httpHeaders})
                        pipe(catchError(this.handleError));
}
DeleteDepartment(id:any):Observable<any>{
  let API_URL =  `${this.REST_API}/department-delete/${id}`;
                  return this.httpClient.delete(API_URL)
                  .pipe(catchError(this.handleError))
}
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
