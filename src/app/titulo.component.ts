import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-titulo',
    template: '<h1>{{texto}}</h1>'
})
export class TituloComponent {
    @Input() texto: string = "TÍTULO SIN RELLENAR";
}