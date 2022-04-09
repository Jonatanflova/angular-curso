import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  nuevo: Personaje = {
    nombre: 'Mr. Roshi',
    poder: 1000
  }

  constructor() {}
}
