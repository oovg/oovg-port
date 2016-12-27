import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Work } from './work.model';
import { WorksService } from './works.service';

@Component({
  templateUrl: './work-detail.component.html',
})
export class WorkDetailComponent implements OnInit, OnDestroy {
    work: Work;
    sub: any;

    constructor(private worksService: WorksService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.work = this.worksService.get(id);
        });
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
  
    gotoWorksList(){
      let link = ['/works'];
      this.router.navigate(link);
    }
}
