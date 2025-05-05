import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private credenciaisSource = new BehaviorSubject<{nome: string, email: string}>({ nome: '', email: '' });
  credenciaisAtuais = this.credenciaisSource.asObservable();


  atualizarCredenciais(credenciais: {nome: string, email: string}) {

    this.credenciaisSource.next(credenciais);

  }
  constructor() { }
}
