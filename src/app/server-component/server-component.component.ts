import { Component, OnInit, Input, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit, AfterViewInit {

  @Input('srvElement') element: {type: string, serverName: string, serverContent: string}

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log('ngAfterContentInit called..');
    console.log(this.paragraph.nativeElement.textContent);
  }

}
