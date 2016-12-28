import { Injectable } from '@angular/core';
import { Work } from './work.model';

const Works: Work[] = [
      {id: 1, title: 'Bloomsbury Anthology of Aesthetics', type: 'Print', img: '../assets/images/work/aesthetics/aesthetics-feat.jpg'},
      {id: 2, title: 'Landfill Quarterly', type: 'Branding', img: '../assets/images/work/landfill/landfill-feat.jpg'},
      {id: 3, title: 'LandApart', type: 'Branding', img: '../assets/images/work/landapart/landapart-feat.jpg'},
    ];

@Injectable()
export class WorksService {
  getAll(): Work[] {
    return Works;
  }
  get(id: number): Work {
    return Works.find(p => p.id === id);
  }
}
