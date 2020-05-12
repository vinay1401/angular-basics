import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directiveexample.component.html',
  styleUrls: ['./directiveexample.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  textVal:string = ' '
  textInput:string = 'Vinay'
  constructor() { }

  ngOnInit(): void {
  }

}
