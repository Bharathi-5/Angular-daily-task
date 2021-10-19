import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { AsyncComponent } from './async/async.component';
import { ObservableComponent } from './observable/observable.component';
import { MathsService } from './services/maths.service';
import { HttpClientModule } from '@angular/common/http';
import { FreeapiService } from './services/freeapi.service';
import { HttpComponent } from './http/http.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    AsyncComponent,
    ObservableComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MathsService,
    FreeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
