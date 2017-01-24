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
          'z-index': '99',
          'opacity': '0',
          'transform': 'scale(0)',
          'transform-origin': '50% 50%'
        })),
      state('start', style ({
          'opacity': '1'
        })),
      state('stop', style ({
          'opacity': '0'
        })),
      transition('* <=> *', animate('250ms ease-in-out'))
      ]
    )
  ],
  host: {'[@routerTransition]': ''}
})

export class WorksComponent implements OnInit{
  types: Type[] = [];
  filter: string[] = ['Branding', 'Print', 'Web', 'Illustration'];
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
