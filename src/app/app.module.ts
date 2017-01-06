import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { router } from './app.routes';

import { HomeComponent }   from './components/home/home.component';
import { AboutComponent }   from './components/about/about.component';
import { ConnectComponent }   from './components/connect/connect.component';
import { NotFoundComponent }   from './components/not-found/not-found.component';
import { WorksComponent }   from './components/works/works.component';
import { WorkDetailComponent }   from './components/works/work-detail.component';
import { WorksService }   from './components/works/works.service';
import {CheckboxModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConnectComponent,
    WorksComponent,
    WorkDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CheckboxModule,
    router
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
