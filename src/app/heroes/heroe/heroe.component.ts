import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.css']
})

export class HeroeComponent {
    nombre: string = "wonderwoman";
    edad: number = 45;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }    

    obtenerNombre(): string {
        return `nombre: ${this.nombre} + edad: ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre ="Hombre-Araña";
    }
}