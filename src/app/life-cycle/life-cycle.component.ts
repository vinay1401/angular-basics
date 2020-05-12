import { Component, EventEmitter, OnInit, ViewChild, ElementRef, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  data = [];

  @ViewChild('name') name: ElementRef;
  @ViewChild('address') address: ElementRef;

  @Output() onAddValue = new EventEmitter<{name: string, address: string}>();

  @Input() comment: string;

  constructor() {
    console.log('Constructor called..');
   }

  ngOnInit(): void {
    console.log('ngOnInit called..');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called..');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck called..'+this.comment);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called..');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called..');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called..');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called..');
  }

  ngOnDestroy(){
    console.log('Destroy called');
  }
  add(){
    console.log("_________________________Adding___________________________________________")
    
    let val = {
      "name" : this.name.nativeElement.value,
      "address" : this.address.nativeElement.value
    }

    this.data.push(val);

    this.onAddValue.emit(val);
  }

  delete(){
    this.data.splice(1);
  }
}
