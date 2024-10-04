import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Name = 'Ayren';
  articleInstance = new article();
}

export class article {
  title: string = "SHE ATE MY BURGER AAAAAA";
  content: string = "swaws";
  isTechRelated: boolean = false
}
