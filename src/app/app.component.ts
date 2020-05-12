import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  afterAddValue(value: {name: string, address: string}){
    console.log("___________________afterAddValue__________________________")
    console.log("name: "+value.name+" Address: "+value.address);

  }
}
