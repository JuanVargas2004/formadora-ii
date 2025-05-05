import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private valorSource = new BehaviorSubject<{valor: string}>({ valor: '' });
  valorAtual = this.valorSource.asObservable();

  constructor(private http: HttpClient) { }

  url = "https://economia.awesomeapi.com.br/last/USD-BRL"

  getConversao(): Observable<any> {
    return this.http.get(this.url);
  }

  atualizarValor(valor: {valor: string}){
    this.valorSource.next(valor);
  }

}
