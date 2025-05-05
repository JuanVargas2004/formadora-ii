import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BaseConversorComponent } from '../components/base-conversor/base-conversor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
  imports: [IonicModule, BaseConversorComponent]
})
export class ConversorPage implements OnInit {

  constructor(private router: Router) { }

  irParaComunicacao() {
    this.router.navigate(['/comunicacao']);
  }

  ngOnInit() {
  }

}
