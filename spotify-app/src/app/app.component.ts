import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Imports FontAwesome from package using "npm install @fortawesome/angular-fontawesome@0.14.x"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Imports FontAwesome icons
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify-app';
  faSpotify = faSpotify;
  faMagnifyingGlass = faMagnifyingGlass;
}
