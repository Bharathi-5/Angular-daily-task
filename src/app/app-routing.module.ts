import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { HttpComponent } from './http/http.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent},
  { path: 'template', component: TemplateComponent},
  { path: 'reactive', component: ReactiveComponent},
  { path: 'observable', component: ObservableComponent},
  { path: 'async', component: AsyncComponent},
  { path: 'http', component: HttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
