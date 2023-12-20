import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'lavoro2';

  ARMI = [
    {id: 1, name:'Glock'},
    {id: 2, name:'Beretta92'},
    {id: 5, name:'M4A1'},
    {id: 3, name:'Minimi'},
    {id: 4, name:'BerettaARX'}

  ];
}
