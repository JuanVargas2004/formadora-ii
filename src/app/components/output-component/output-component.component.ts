import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.scss'],
  imports: [IonicModule],
})
export class OutputComponentComponent implements OnInit {
  nome: string = '';
  email: string = '';
  private credenciaisSubscription: Subscription | undefined;


  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.credenciaisSubscription = this.dataService.credenciaisAtuais.subscribe(credenciais =>{
      this.nome = credenciais.nome;
      this.email = credenciais.email;

    })
  }

  ngOnDestroy() {
    if (this.credenciaisSubscription) {
      this.credenciaisSubscription.unsubscribe();
    }
  }

}
