import { Component } from '@angular/core';

@Component({
  selector: 'app-non-existing-component',
  standalone: true,
  imports: [],
  templateUrl: './non-existing-component.component.html',
  styleUrl: './non-existing-component.component.css'
})
export class NonExistingComponentComponent {

}
