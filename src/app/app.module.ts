import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { ZonePrincipaleComponent } from './zone-principale/zone-principale.component';
import { ZoneDeGaucheComponent } from './zone-de-gauche/zone-de-gauche.component';
import { ZoneDuBasComponent } from './zone-du-bas/zone-du-bas.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    ZonePrincipaleComponent,
    ZoneDeGaucheComponent,
    ZoneDuBasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
