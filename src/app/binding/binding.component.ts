import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  stringText = "This is String interpolation value";
  btnDisabled = true;
  inputVal = "Test";
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 2000);
  }

  onInput(event: any){
    this.inputVal = event.target.value;
  }

}
