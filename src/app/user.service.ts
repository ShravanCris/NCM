import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private username : string;
	// private password : string;
  constructor( private http : Http) { }

  authenticateUser(username : String, password: String){
    
    return this.http.get("../assets/users.json")
    .pipe(map(response=> response.json()));
	}
}
