import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// Coleccion de futuros eventos para suscribirse y llegar de manera asincrona

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) {}
  obtenerDatos():Observable<any> {
      return this.http.get('json');
    }
}
