import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    // Observable realiza peticiones asyncronas

    return this.http.get<persona>(this.URL+'traer/perfil')
  }


}
