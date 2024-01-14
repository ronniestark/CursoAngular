import { Component, OnInit } from "@angular/core";
import { Persona } from "../personas";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrl: './contador.component.css'
})

export class ContadorComponent  {

    constructor(){
       
    }
    ngOnInit(): void {

    }

    nombre:string = 'Ronnie Acevedo';

    persona:Persona = {
        nombre: 'Ronnie Aaron',
        edad: 25,
        direccion: 'Villa Dignidad Casa #800',
        correo: 'ronniestark999@gmail.com'
    }
    numero: number = 1;

    decrementar(){
        this.numero --;
    }

    incrementar(){
        this.numero += 1 ;
    }

}