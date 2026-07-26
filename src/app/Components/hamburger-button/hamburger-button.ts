import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  imports: [],
  templateUrl: './hamburger-button.html',
  styleUrl: './hamburger-button.scss',
})
export class HamburgerButton {

  @Input() isActive: boolean = false;
  @Output() isActiveChange = new EventEmitter<boolean>();

  toggle() {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive);
  }

}
