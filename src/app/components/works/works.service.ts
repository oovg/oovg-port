import { Injectable } from '@angular/core';
import { Work } from './work.model';

const Works: Work[] = [
      {id: 1, title: 'Hack Oregon', type: 'Branding, Product', img: '../assets/images/image-01.jpg'},
      {id: 2, title: 'Landfill Quarterly', type: 'Branding, Print', img: '../assets/images/image-02.jpg'},
      {id: 3, title: 'Bloomsbury Anthology of Aesthetics', type: 'Print', img: '../assets/images/image-03.jpg'},
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
