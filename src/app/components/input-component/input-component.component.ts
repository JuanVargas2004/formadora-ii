import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class InputComponentComponent implements OnInit {

  nome: string = '';
  email: string = '';


  constructor(private dataService: DataServiceService) {}

  enviarDados() {
    this.dataService.atualizarCredenciais({ nome: this.nome, email: this.email });
  }

  ngOnInit() {}

}
