import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { Concession } from './models/concession.model';
@Injectable({
  providedIn: 'root'
})
export class AdddeleteService {

  private ConcessionUrl = '/concession';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

 
  getConcessions(): Promise<Concession[]> {
    return this.http.get(this.ConcessionUrl)
      .toPromise()
      .then(response => response.json() as Concession[])
      .catch(this.handleError);
  }

 getBySrlnoStart(srlnoStart: string): Promise<Concession[]> {
    const url = `findbySrlnoStart/{srlnoStart}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Concession)
      .catch(this.handleError);
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
