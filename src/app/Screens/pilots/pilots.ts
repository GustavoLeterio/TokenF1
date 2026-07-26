import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { GlassmorphismCard } from '../../Components/glassmorphism-card/glassmorphism-card';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-pilots',
  imports: [MatIconModule, GlassmorphismCard, RouterLink],
  templateUrl: './pilots.html',
  styleUrl: './pilots.scss',
})
export class Pilots {

}
