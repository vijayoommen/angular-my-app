import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { OnChangesParentComponent } from './mycomponent/onchanges-parent.component';
import { SpyListComponent } from './spy-list/spy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    OnChangesParentComponent,
    SpyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
