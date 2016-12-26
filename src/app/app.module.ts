import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }   from './components/about/about.component';
import { WorkComponent }   from './components/work/work.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
