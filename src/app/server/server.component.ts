import {Component} from '@angular/core'

@Component({
    //Normal selector
    //selector: "server-component",
    //Attribute selector
    //selector: "[server-component]",
    //Class selector
    selector: ".server-component",
    templateUrl: "./server.component.html"
})
export class ServerComponent {

    serverElements: any[] = [{"type": "server", "serverName": "Test Server", "serverContent": "Test Server Content"}];

    public onServerCreated(server: {serverName: string, serverContent: string}){
        this.serverElements.push({
            "type": "server",
            "serverName": server.serverName,
            "serverContent": server.serverContent
        })
    }

    public onBlueprintCreated(blueprint: {serverName: string, serverContent: string}){
        this.serverElements.push({
            "type": "blueprint",
            "serverName": blueprint.serverName,
            "serverContent": blueprint.serverContent
        })
    }

}