import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiDataService } from 'src/app/api-data.service';

@Component({
  selector: 'app-base-conversor',
  templateUrl: './base-conversor.component.html',
  styleUrls: ['./base-conversor.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class BaseConversorComponent  implements OnInit {

  valor_enviado: string = '';
  valor_recebido: string | number = '';

  conversao_compra: any = "";


  constructor(private apiData: ApiDataService) { }

  enviarValor(){
    this.apiData.atualizarValor({valor: this.valor_enviado})
  }

  fazerRequisicao(){
    this.apiData.getConversao().subscribe((data:any) => {

      this.conversao_compra = parseFloat(data.USDBRL.bid);
      this.valor_recebido = (this.conversao_compra * parseFloat(this.valor_enviado)).toFixed(2);

    })
  }

  ngOnInit() {}

}
