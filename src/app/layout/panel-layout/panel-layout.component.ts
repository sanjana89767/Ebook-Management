import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.css']
})
export class PanelLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
