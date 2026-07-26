import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-glassmorphism-card',
  imports: [],
  templateUrl: './glassmorphism-card.html',
  styleUrl: './glassmorphism-card.scss',
})
export class GlassmorphismCard {
  defaultExternalStyle: { [key: string]: string } =
    { padding: '0.5rem 1rem',
      borderRadius: '4rem',
     };
  @Input() externalStyle: { [key: string]: string } = {};
  @Input() lightOnHover: boolean = true;
  @Input() lit: boolean = false;

  @HostBinding('externalStyle') get getStyle(): { [key: string]: string } {
    return { ...this.defaultExternalStyle, ...this.externalStyle };
  }
}

