import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveExampleComponent } from './directiveexample/directiveexample.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponentComponent } from './server-component/server-component.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BindingComponent,
    DirectiveExampleComponent,
    CockpitComponent,
    ServerComponentComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
