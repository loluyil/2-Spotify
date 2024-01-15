import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//icons
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-card.component.html',
  styleUrl: './nav-card.component.css'
})
export class NavCardComponent {
  fachevronLeft = faChevronLeft;
  fachevronRight = faChevronRight;
}
