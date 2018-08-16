import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { Concession } from './models/concession.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdddeleteService {

  v_card_S_no:Number;
  g_card_S_no: Number;
  baseurl:string="http://localhost:8080";
  //private url = '/findbyCard_S_no/1001'; 
  private ConcessionUrl = '/concession';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  private Var1;
  constructor(private http: Http) {}

 
  getConcessions(): Promise<Concession[]> {
    return this.http.get(this.ConcessionUrl)
      .toPromise()
      .then(response => response.json() as Concession[])
      .catch(this.handleError);
  }

  findbyCard_S_no(card_S_no: Number): Promise<Concession> {
    this.v_card_S_no= Number(card_S_no);
    console.log("we reached in addelete" + this.v_card_S_no);
    const url = `/findbyCard_S_no/${this.v_card_S_no}`;
   return this.http.get(url)
     .toPromise()
    .then(response => response.json() as Concession)
    .catch(this.handleError);
    //console.log(" In findbyCard_S_no"); 
  }

  findCardtoModify(v_card_S_No: Number): Promise<Concession> {
    
    this.g_card_S_no=Number(this.v_card_S_no);
    const url = `/findbyCard_S_no/${this.g_card_S_no}`;
   return this.http.get(url)
     .toPromise()
    .then(response => response.json() as Concession)
    .catch(this.handleError);
    //console.log(" In findbyCard_S_no"); 
  }
  updateConcession(concession:Concession): Promise<Concession> {
    return this.http
    .post('/updateconcession', JSON.stringify(concession), {headers : this.headers})
    .toPromise()
    .then(res => res.json() as Concession)
    .catch(this.handleError);
    //console.log(" In findbyCard_S_no"); 
  }

  create(concession: Concession): Promise<Concession> {
    return this.http
      .post('/postconcession', JSON.stringify(concession), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Concession)
      .catch(this.handleError);
  }

  
  delete(id: number): Promise<void> {
    const url = `${this.ConcessionUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
