import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logo } from './logo.interface';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  constructor(
    private http: HttpClient
  ) { }

  getLogo(): Observable<Logo>{
    const url: string = "http://localhost:3001/logo";
    return this.http.get<Logo>(url);
  }
}
