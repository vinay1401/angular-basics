import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //serverName: string =""
  //serverContent: string = "";
  @ViewChild('serverContentElement', {static: true}) serverContentElement : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public addServer(serverNameElement: HTMLInputElement){
    this.serverCreated.emit({
      "serverName": serverNameElement.value,
      "serverContent": this.serverContentElement.nativeElement.value
    });
  }

  public addBluePrint(serverNameElement: HTMLInputElement){
    this.blueprintCreated.emit({
      "serverName": serverNameElement.value,
      "serverContent": this.serverContentElement.nativeElement.value
    });

    //Not Recomened, do not access dome directly
    //this.serverContentElement.nativeElement.value = "Some blue print"
  }
}
