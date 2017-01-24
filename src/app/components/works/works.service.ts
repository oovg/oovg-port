import { Injectable } from '@angular/core';
import { Work } from './work.model';

const Works: Work[] = [
      {id: 1,
        title: 'Civic',
        types: [] = [
          { name: 'Branding' },
          { name:'Web' }
        ],
        caption: 'Data for the people',
        desc: 'Hack Oregon is buiding a platform for data storytelling utilizing open civic data. This project is in progress. Hack Oregon is hosting a 3 month unconference for volunteers to build the Civic platform. Visit civiclabpdx.com to join the effort.',
        color: '220f25',
        images: [] = [
          {
            id: 1,
            url: '../assets/images/work/civic/civic-feat.jpg',
            caption: 'Logo designed with Adrienne Tilley'
          },
          {
            id: 2,
            url: '../assets/images/work/civic/civic-wire.jpg',
            caption: ''
          },
          {
            id: 3,
            url: '../assets/images/work/civic/civic-web-01.jpg',
            caption: ''
          },
          {
            id: 4,
            url: '../assets/images/work/civic/civic-web-02.jpg',
            caption: ''
          },
          {
            id: 5,
            url: '../assets/images/work/civic/civic-web-03.jpg',
            caption: ''
          },
          {
            id: 6,
            url: '../assets/images/work/civic/civic-web-04.jpg',
            caption: ''
          },
          {
            id: 7,
            url: '../assets/images/work/civic/civic-web-05.jpg',
            caption: ''
          },
          {
            id: 8,
            url: '../assets/images/work/civic/civic-web-06.jpg',
            caption: ''
          }
        ]
      },
      {id: 2, 
       title: 'LandApart', 
       types: [] = [
          { name: 'Branding' },
          { name: 'Print' },
          { name: 'Web' }
        ], 
       caption: 'Under the stars',
       desc: 'LandApart is a land sharing platform. Landowners list their land. You book and enjoy nature.',
       color: '232339',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/landapart/landapart-feat.jpg',
            caption: ''
          },
         {
            id: 2,
            url: '../assets/images/work/landapart/landapart-logo.jpg',
            caption: 'For the logo, we went with a tent constellation concept, expressing LandApart’s mission of helping its customers stay beneath the stars. The constellation also doubles as an expression of the community of hosts and guests that make it possible.'
          },
         {
            id: 3,
            url: '../assets/images/work/landapart/landapart-home.jpg',
            caption: ''
          },
         {
            id: 4,
            url: '../assets/images/work/landapart/landapart-home-02.jpg',
            caption: ''
          },
         {
            id: 5,
            url: '../assets/images/work/landapart/landapart-home-03.jpg',
            caption: ''
          },
         {
            id: 6,
            url: '../assets/images/work/landapart/landapart-explore.jpg',
            caption: ''
          },
         {
            id: 7,
            url: '../assets/images/work/landapart/icons.jpg',
            caption: 'Host / Guest icons'
          },
         {
            id: 8,
            url: '../assets/images/work/landapart/milehigh-advert.jpg',
            caption: 'Advert for the TEDxMileHigh Camp MileHigh experience'
          },
          {
            id: 9,
            url: '../assets/images/work/landapart/milehigh-flag.jpg',
            caption: 'TEDxMileHigh experiential'
          },
          {
            id: 10,
            url: '../assets/images/work/landapart/milehigh-trailboard.jpg',
            caption: 'TEDxMileHigh interactive visualization'
          },
        ]
      },
      {id: 3, 
        title: 'Bloomsbury Anthology of Aesthetics', 
        types: [] = [
          { name: 'Print' },
          { name: 'Illustration' }
        ], 
        caption: 'Harmony vs. Disharmony',
        desc: 'Tasked with designing a book cover for a new anthology of aesthetics published by Bloomsbury. The unique challenge was illustrating the inherent harmony and disharmony framed by aesthetics. Front cover photo illustration for harmony, back cover illustration for disharmony using the same deconstructed set.',
        color: 'dc363a',
        images: [] = [
          {
            id: 1,
            url: '../assets/images/work/aesthetics/aesthetics-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/aesthetics/aesthetics-02.jpg',
            caption: ''
          }
        ]
      },
      {id: 4, 
       title: 'Landfill Quarterly', 
       types: [] = [
          { name: 'Branding' },
          { name: 'Print' },
          { name: 'Web' }
        ],
       caption: 'Ephemera Subscription Service',
       desc: 'Landfill Quarterly is an art ephemera archive and subscription service. For each issue, subscribers receive a printed quarterly along with physical ephemera from various art exhibits and installations. Each issue was themed and designed separately to match. The website styles were also designed to adjust along with the theme for each issue.',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/landfill/landfill-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/landfill/lfq-issue4-cover.jpg',
            caption: 'Issue 4: The Shift. Each cover was unique in that the printers were tasked to shift the 2 colors randomly within defined constraints.'
          },
          {
            id: 3,
            url: '../assets/images/work/landfill/landfill-web-issue4.jpg',
            caption: ''
          },
          {
            id: 4,
            url: '../assets/images/work/landfill/lfq-issue3-1.jpg',
            caption: 'Issue 3: Species Being'
          },
          {
            id: 5,
            url: '../assets/images/work/landfill/lfq-issue3-2.jpg',
            caption: ''
          },
          {
            id: 6,
            url: '../assets/images/work/landfill/lfq-issue3-3.jpg',
            caption: ''
          },
         {
            id: 7,
            url: '../assets/images/work/landfill/lfq-issue3-6.jpg',
            caption: ''
          },
         {
            id: 8,
            url: '../assets/images/work/landfill/lfq-issue3-7.jpg',
            caption: ''
          },
         {
            id: 9,
            url: '../assets/images/work/landfill/lfq-issue1-1.jpg',
            caption: 'Issue 1: The Morgue. Toe Tag for issue metadata.'
          },
         {
            id: 10,
            url: '../assets/images/work/landfill/lfq-issue1-2.jpg',
            caption: 'Toe Tag close-up'
          },
         {
            id: 11,
            url: '../assets/images/work/landfill/lfq-issue1-3.jpg',
            caption: ''
          },
         {
            id: 12,
            url: '../assets/images/work/landfill/lfq-issue1-4.jpg',
            caption: 'Table of Contents with infographic representing specific word occurences throughout the issue.'
          },
         {
            id: 13,
            url: '../assets/images/work/landfill/lfq-issue1-5.jpg',
            caption: ''
          },
         {
            id: 14,
            url: '../assets/images/work/landfill/lfq-issue1-6.jpg',
            caption: ''
          }
        ]
      }, 
      {id: 5, 
       title: 'Hill or no Hill', 
       types: [] = [
          { name: 'Print' }
        ],
       caption: 'San Francisco printed in 3D',
       desc: 'Unique challenge',
       color: '220f25',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/hill/hill-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/hill/hill-close-bottom.jpg',
            caption: ''
          },
         {
            id: 3,
            url: '../assets/images/work/hill/hill-far-dark.jpg',
            caption: ''
          }
        ]
      },
      {id: 6, 
       title: 'Hippy Shit', 
       types: [] = [
          { name: 'Print' },
          { name: 'Illustration' }
        ],
       caption: 'Make believe it is your first time',
       desc: 'Unique challenge',
       color: '9ea5dc',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/hippy/hippy-feat.jpg',
            caption: ''
          }
        ]
      },
      {id: 7, 
       title: 'University of Hawaii', 
       types: [] = [
          { name: 'Branding' },
          { name: 'Web' }
        ],
       caption: 'Western Philosophy, meet Eastern Philosophy',
       desc: 'Unique challenge',
       color: 'ec9102',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/uhmdp/uhmdp-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/uhmdp/uhmdp-desktop.jpg',
            caption: ''
          },
         {
            id: 2,
            url: '../assets/images/work/uhmdp/uhmdp-mobile.jpg',
            caption: ''
          }
        ]
      },
      {id: 8, 
       title: 'Iceland', 
       types: [] = [
          { name: 'Illustration' }
        ],
       caption: 'Broken Camera = Illustrations',
       desc: 'On a recent adventure Iceland, my camera broke on the first day. I had acquired some markers back in Reykjavik, so instead of photography, I made quick tiny illustrations of various vistas. As one would expect, I became much more familiar with these landforms as I meticulously followed every contour over time, as opposed to just simply pushing a button and looking at them later. With only 4 colors to work with, I developed a color code. Black = Rock. Blue = Ice, Snow, and Water. Green = Moss, Red = Humans or human constructs. I borrowed a yellow marker from a cohort for the sun rays that appeared over Svinasfelljokull.',
       color: '000000',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/iceland/iceland-jokulsarlon.jpg',
            caption: 'Jokulsarlon'
          },
         {
            id: 2,
            url: '../assets/images/work/iceland/iceland-02.jpg',
            caption: 'Svinasfelljokull'
          },
         {
            id: 3,
            url: '../assets/images/work/iceland/iceland-03.jpg',
            caption: 'Drangshild'
          },
         {
            id: 4,
            url: '../assets/images/work/iceland/iceland-04.jpg',
            caption: 'Skogafoss'
          },
          {
            id: 5,
            url: '../assets/images/work/iceland/iceland-05.jpg',
            caption: 'Seljalandsfoss'
          }
        ]
      },
      {id: 9, 
       title: 'Chromatic Guide to Gear Ratios', 
       types: [] = [
          { name: 'Print' }
        ],
       caption: 'Interactive Print',
       desc: 'Unique challenge',
       color: 'bec263',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/ratios/ratios-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/ratios/ratios-full.jpg',
            caption: ''
          },
         {
            id: 3,
            url: '../assets/images/work/ratios/ratios-center.jpg',
            caption: ''
          },
         {
            id: 4,
            url: '../assets/images/work/ratios/ratios-key.jpg',
            caption: ''
          }
        ]
      },
      {id: 10, 
       title: 'Curse of Dimensionality', 
       types: [] = [
          { name: 'Print' },
          { name: 'Illustration' }
        ],
       caption: 'Brief Concepts',
       desc: 'Unique challenge',
       color: 'ced3d6',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/curse/curse-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/curse/curse-01.jpg',
            caption: ''
          },
          {
            id: 3,
            url: '../assets/images/work/curse/curse-02.jpg',
            caption: ''
          },
         {
            id: 4,
            url: '../assets/images/work/curse/curse-0.jpg',
            caption: ''
          },
         {
            id: 5,
            url: '../assets/images/work/curse/curse-03.jpg',
            caption: ''
          },
         {
            id: 6,
            url: '../assets/images/work/curse/curse-04.jpg',
            caption: ''
          },
         {
            id: 7,
            url: '../assets/images/work/curse/curse-05.jpg',
            caption: ''
          },
        ]
      },
    {id: 11, 
       title: 'Kathleen Lane', 
       types: [] = [
          { name: 'Web' },
          { name: 'Illustration' }
        ],
       caption: '',
       desc: 'Development and illustration.',
       color: 'e7c645',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/kathleen/kathleen-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/kathleen/kathleen-01.jpg',
            caption: ''
          },
         {
            id: 3,
            url: '../assets/images/work/kathleen/kathleen-02.jpg',
            caption: ''
          },
        ]
      },
    {id: 12, 
       title: 'SHUT UP AND EAT', 
       types: [] = [
          { name: 'Web' }
        ],
       caption: '',
       desc: 'Development and asset integration. Logo and web design by Alex Harris',
       color: 'fedd00',
       images: [] = [
          {
            id: 1,
            url: '../assets/images/work/shutup/shutup-feat.jpg',
            caption: ''
          },
          {
            id: 2,
            url: '../assets/images/work/shutup/shutup-web-01.jpg',
            caption: ''
          },
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
