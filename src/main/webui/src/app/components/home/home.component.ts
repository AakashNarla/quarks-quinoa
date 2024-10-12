import { Component } from '@angular/core';

import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatChip,  MatChipsModule} from "@angular/material/chips";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatChipsModule,
    MatCardContent,
    MatCardActions,
    MatChip,
    MatCard
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
