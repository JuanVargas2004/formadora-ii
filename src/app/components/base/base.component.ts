import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  imports: [IonicModule],
})
export class BaseComponent  implements OnInit {

  constructor(private router: Router) { }

  irParaComunicacao() {
    this.router.navigate(['/comunicacao']);
  }

  ngOnInit() {}

}
