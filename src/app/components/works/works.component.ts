import { Component, OnInit } from '@angular/core';
import { Work } from './work.model';
import { WorksService } from './works.service';

@Component({
  selector: 'works-list',
  templateUrl: './works.component.html'
})
export class WorksComponent implements OnInit{
  works: Work[] = [];

  constructor(private worksService: WorksService){ }

  ngOnInit(){
    this.works = this.worksService.getAll();
  }
}
