import { Component, OnInit, NgZone, trigger, transition, style, animate, state } from '@angular/core';
import { Work } from './work.model';
import { WorksService } from './works.service';
import { routerTransition } from '../../router.animations';
import { Type } from './work.model';

@Component({
  selector: 'works-list',
  templateUrl: './works.component.html',
  animations: [
    routerTransition(),
    trigger('ifWorkAnimate', [
        state('void', style ({
          'opacity': '0',
          'transform': 'scale(0)'
        })),
      state('enter', style ({
          'opacity': '1'
        })),
      state('leave', style ({
          'opacity': '0'
        })),
      transition('* <=> *', animate('400ms linear'))
      ]
    )
  ],
  host: {'[@routerTransition]': ''}
})

export class WorksComponent implements OnInit{
  types: Type[] = [];
  filter: string[] = ['Branding', 'Print', 'Product'];
  works: Work[] = [];

  constructor(private worksService: WorksService){ }
  
  test(types1, filter){
    for(let i = 0; i <= filter.length-1; i++){
      for(let j = 0; j <= types1.length-1; j++){
        if(types1[j].name == filter[i]) return true;
      }
    }
    return false;
  }

  ngOnInit(){
    this.works = this.worksService.getAll();
  }
}
