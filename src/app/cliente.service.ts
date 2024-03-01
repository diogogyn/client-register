import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  adicionarCliente(cliente: any): Observable<any> {
    return this.http.post(`${API_PATH}/user`, cliente);
  }

  listarClientes(): Observable<any> {
    return this.http.get(`${API_PATH}/user`);
  }
}
