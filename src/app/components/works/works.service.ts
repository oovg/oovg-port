import { Injectable } from '@angular/core';
import { Work } from './work.model';
import { Image } from './work.model';

const Works: Work[] = [
      {id: 1, 
        title: 'Civic', 
        type: 'Branding', 
        caption: 'Data for the people',
        color: '220f25',
        images: [] = [
          {
            id: 1,
            url: '../assets/images/work/civic/civic-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/civic/civic-02.jpg'
          }
        ]
      },
      {id: 2, 
       title: 'LandApart', 
       type: 'Branding', 
       caption: 'Under the stars',
       color: '649553',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/landapart/landapart-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/landapart/landapart-02.jpg'
          }
        ]
      },
      {id: 3, 
        title: 'Bloomsbury Anthology of Aesthetics', 
        type: 'Print', 
        caption: 'Harmony vs. Disharmony',
       color: '220f25',
        images: [] = [
          {
            id: 1,
            url: '../assets/images/work/aesthetics/aesthetics-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/aesthetics/aesthetics-02.jpg'
          }
        ]
      },
      {id: 4, 
       title: 'Landfill Quarterly', 
       type: 'Branding', 
       caption: 'Subscribe to Ephemera',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/landfill/landfill-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/landfill/landfill-02.jpg'
          }
        ]
        
      }, 
      {id: 5, 
       title: 'Hill or no Hill', 
       type: 'Print',
       caption: 'San Francisco printed in 3D',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/hill/hill-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/hill/hill-02.jpg'
          }
        ]
      },
      {id: 6, 
       title: 'Hippy Shit', 
       type: 'Print',
       caption: 'Make believe it is your first time',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/hippy/hippy-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/hippy/hippy-02.jpg'
          }
        ]
      },
      {id: 7, 
       title: 'University of Hawaii', 
       type: 'Branding',
       caption: 'Western Philosophy, meet Eastern Philosophy',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/uhmdp/uhmdp-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/uhmdp/uhmdp-02.jpg'
          }
        ]
      },
      {id: 8, 
       title: 'Iceland', 
       type: 'Illustration',
       caption: 'Broken Camera = Illustrations',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/iceland/iceland-jokulsarlon.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/iceland/iceland-drangshild.jpg'
          }
        ]
      },
      {id: 9, 
       title: 'Chromatic Guide to Gear Ratios', 
       type: 'Print',
       caption: 'Interactive Print',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/ratios/ratios-feat.jpg'
          },
          {
            id: 2,
            url: '../assets/images/work/ratios/ratios-02.jpg'
          }
        ]
      },
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
