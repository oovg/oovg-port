import { Component, OnInit } from '@angular/core';
import { Work } from './work.model';
import { WorksService } from './works.service';

@Component({
  selector: 'works-list',
  template: `
  <ul>
    <li *ngFor="let work of works">
        <a href="#" [routerLink]="['/works', work.id]">
      {{work.title}}
      </a>
    </li>
  </ul>
  `
})
export class WorksComponent implements OnInit{
  works: Work[] = [];

  constructor(private worksService : WorksService){ }

  ngOnInit(){
    this.works = this.worksService.getAll();
  }
}
