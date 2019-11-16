import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable()
export class EmployeeService{
  constructor(private _http:Http){

  }
  getEmployees():Observable<IEmployee[]>{
    return this._http.get('http://localhost:55785/api/employee')
                      .map((response: Response)=><IEmployee[]>response.json())
                      .catch(this.handleError);
  }

  handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
  }
}