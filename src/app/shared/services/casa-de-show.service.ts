import { CasaDeShow } from './../models/casa-de-show.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasaDeShowService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/casadeshow';
   }

  public findAll(): Observable<CasaDeShow[]>{
    return this.http.get<CasaDeShow[]>(this.url);
  }

  public save(casaDeShow: CasaDeShow): Observable<CasaDeShow>{
    return this.http.post<CasaDeShow>(this.url, casaDeShow);
  }

  public update(casaDeShow: CasaDeShow): Observable<CasaDeShow>{
    return this.http.put<CasaDeShow>(this.url, casaDeShow);
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }
}
