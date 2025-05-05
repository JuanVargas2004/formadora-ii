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

  valor_compra: any = "";

  constructor(private apiData: ApiDataService) { }

  enviarValor(){
    this.apiData.atualizarValor({valor: this.valor_enviado})
  }


  ngOnInit() {

    this.apiData.getConversao().subscribe((data) => {
      this.valor_compra = data;
      console.log(this.valor_compra.USDBRL.bid);
    })


    this.apiData.valorAtual.subscribe(valor => {
      this.valor_recebido = (parseFloat(valor.valor) * parseFloat(this.valor_compra.USDBRL.bid)).toFixed(2);
    })

  }

}
