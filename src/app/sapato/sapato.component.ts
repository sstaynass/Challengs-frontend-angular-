import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sapato',
  imports: [],
  templateUrl: './sapato.component.html',
  styleUrl: './sapato.component.scss'
})
export class SapatoComponent {
  @Input() imagem!: string;
  @Input() nome!: string;
  @Input() preco!: string;
  @Input() tipo!: string;
}
