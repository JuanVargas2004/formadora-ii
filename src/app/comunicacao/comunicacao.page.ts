import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputComponentComponent } from '../components/input-component/input-component.component';
import { OutputComponentComponent } from '../components/output-component/output-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicacao',
  templateUrl: './comunicacao.page.html',
  styleUrls: ['./comunicacao.page.scss'],
  imports: [IonicModule, InputComponentComponent, OutputComponentComponent],
})
export class ComunicacaoPage implements OnInit {

  constructor(private router: Router) { }

  irParaHome(){
    this.router.navigate(['/home']);
  }

  irParaConversor(){
    this.router.navigate(['/conversor']);
  }

  ngOnInit() {
  }

}
