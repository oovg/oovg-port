import { Component, OnInit } from '@angular/core';
import { Work } from './work.model';
import { WorksService } from './works.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'works-list',
  templateUrl: './works.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class WorksComponent implements OnInit{
  works: Work[] = [];

  constructor(private worksService: WorksService){ }

  ngOnInit(){
    this.works = this.worksService.getAll();
  }
}
