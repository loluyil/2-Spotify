import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports FontAwesome from package using "npm install @fortawesome/angular-fontawesome@0.14.x"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Imports FontAwesome icons
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeContainer: string = ''; // Track the active container

  toggleColor(container: string) {
    console.log(`Clicked on ${container}. Active container: ${this.activeContainer}`);
  // If the clicked container is different from the active one...
  if (this.activeContainer !== container) {
    // ...put the label of the clicked container on the box.
    this.activeContainer = container;
  }
  // If the clicked container is the same as the active one, do nothing (don't remove the label).
}

  //angular binds: so [style.transform] = "'rotate(90deg)'" is what it's doing. both HTML or TS approach is fine
  //loads icon to be rotated 90 deg so no animation plays out
  iconTransform: string = 'rotate(90deg)';
  
  // Icons

  faSpotify = faSpotify;
  faMagnifyingGlass = faMagnifyingGlass;
  faHouse = faHouse;
  faCircle = faCircle;
  faLayerGroup = faLayerGroup;
  faPlus = faPlus;
}
