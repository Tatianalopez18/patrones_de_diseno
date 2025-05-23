import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-design-patterns',
  imports: [MatCardModule, RouterModule],
  standalone: true,
  templateUrl: './design-patterns.component.html',
  styleUrl: './design-patterns.component.scss'
})
export class DesignPatternsComponent {

}
