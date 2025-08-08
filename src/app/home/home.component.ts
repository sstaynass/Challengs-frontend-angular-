import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';       
import { SapatoComponent } from '../sapato/sapato.component';

@Component({
  selector: 'app-home',
  standalone: true,                                  
  imports: [CommonModule, SapatoComponent],          
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']               
})
export class HomeComponent {
  sapatos = [
    { nome: 'Air Jordan 1 Mid Dutch Green', preco: '1.199,99', tipo: 'Tênis Air Jordan', imagem: 'assets/jordan-1.png' },
    { nome: 'Air Jordan 1 High Zoom CMFT Tropical Twist', preco: '1.049,00', tipo: 'Tênis Air Jordan', imagem: 'assets/jordan-2.png' },
    { nome: 'Air Jordan 1 Mid Dutch Green', preco: '1.350,00', tipo: 'Tênis Air Jordan', imagem: 'assets/jordan-3.png' },
    { nome: 'Air Jordan 1 Mid GS Light Smoke Grey', preco: '1.585,00', tipo: 'Tênis Air Jordan', imagem: 'assets/jordan-4.png' },
    { nome: 'Air Jordan 1 Mid SE Bright Citrus', preco: '949,99', tipo: 'Tênis Air Jordan', imagem: 'assets/jordan-5.png' },
    { nome: 'Air Jordan 1 Mid Grey Camo', preco: '999,99', tipo: 'Tênis Air Jordan', imagem: 'assets/jordan-6.png' },
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', 'url("assets/jordan.png")');
  }
}
