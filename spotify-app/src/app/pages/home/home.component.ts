import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavCardComponent } from "../../components/nav-card/nav-card.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NavCardComponent, SideBarComponent]
})
export class HomeComponent {
  
}
