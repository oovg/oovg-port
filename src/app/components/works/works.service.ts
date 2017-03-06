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
        desc: 'At <a href="http://hackoregon.org" target="_blank">Hack Oregon</a>, we are building a new platform for data storytelling in partnership with the government and community stakeholders. This project is ongoing and Hack Oregon is hosting a 3 month unconference called Civic Lab for community members to build the Civic platform.<br><br>Visit <a href="http://civiclabpdx.com" target="_blank">Civic Lab</a> to join the effort.<br><br>With quite a bit of product definition work in hand, we formed a popup design team to tackle Branding, translate their previous UX work into higher fidelity UI, and iterate through the unique design problems associated with a storytelling platform heavy on data. As a volunteer-based workforce, we integrated deeply with engineering to develop a workflow to facilitate rapid transition from design into code.',
        color: '220f25',
        images: [] = [
          {
            id: 1,
            url: '../assets/images/work/civic/civic-feat.jpg',
            caption: 'Logo designed with <a href="http://adriennetilley.com/" target="_blank">Adrienne Tilley</a>.'
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
       desc: 'LandApart is a land sharing platform that connects campers with private lands for unique outdoor experiences. The current method used to discover, book and enjoy camping rarely delivers the ideal outdoor experience. So, we looked to leverage tech and the untapped supply of private land to redesign the outdoor experience for the modern traveler. Essentially, the platform functions as an Airbnb for outdoor spaces. A listing can be a campsite, treehouse, or space suitable for larger gatherings.<br><br>Along with heading Branding, Design and Frontend efforts, I am also acting CEO facilitating an amazing team working real hard to keep private land wild and deliver quality time in nature.',
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
            caption: 'For the logo, we went with a tent constellation concept, expressing LandApart’s mission of helping its customers stay beneath the stars. The constellation also doubles as an expression of the community of hosts and guests that make it all possible.'
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
        desc: 'Tasked with designing a book cover for a new anthology of aesthetics published by Bloomsbury. The unique challenge was illustrating the inherent harmony and disharmony framed by aesthetic philosophy. In the end, we went with a front cover photo illustration for harmony and a back cover illustration for disharmony using the same set deconstructed.',
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
          },
          {
            id: 3,
            url: '../assets/images/work/aesthetics/aesthetics-cover-front.jpg',
            caption: ''
          },
          {
            id: 4,
            url: '../assets/images/work/aesthetics/aesthetics-cover-back.jpg',
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
       desc: 'Landfill Quarterly is an art ephemera archive and subscription service. For each issue, subscribers receive a handmade printed journal along with physical ephemera from various art exhibits and installations. Each issue was themed and designed separately to match. The website styles were also designed to adjust along with the theme for each issue.',
       color: 'ee4037',
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
       desc: 'For the Art Crank show in San Francisco. There has always been much talk of the difficulty of riding a bike in SF. The hills, of course, are seen as the problem, though they are much more a puzzle. I had a brass die hand-sculpted of the city to create a three dimensional poster with 12 layers of topographic variance.',
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
       caption: 'Pong, IRL',
       desc: 'The theme for this issue of Hippy Shit was Make believe its your first time. I thought back to my first digital interaction, PONG, and built and shot it IRL. Complete with cubic ball.',
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
       caption: 'West, meet East',
       desc: 'The Department of Philosophy wanted a new seal to go along with a new website. The unique element of the department is that they give equal weight to eastern and western philosophies whereas many departments only touch on the Eastern. We went with a cross section of waves representing the meeting of the minds from West to East. As is typical with academic institutions, a robust multi-layered navigation system tends to disproportionally control the space of a website. We instead built a sliding navigation reminiscient of mobile navigation that is much less obtrusive to the experience.',
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
       desc: 'Bike shops typically have a basic spreadsheet style graphic to represent gear ratio data. I wanted to provide them with a poster that is much less visually oppressive and more fun to use. Furthermore, laymen can quickly compare and understand gear ratios and how it affects their ride.<br><br>The poster was converted into metric (Metres of Development) and published in <a href="http://soigneur.com" target="_blank">Soigneur</a> magazine out of Rotterdam.<br><br>The first run of 600 posters sold out in a couple months. A second edition updated to include both US and Metric units of measure is planned for release.',
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
       desc: 'As a design thinker as well as an amateur physicist, I have an extreme interest in dimensionality and its effects on our perception. What started as a simple idea of visually representing various theories of dimensionality turned into a rabbit hole of deep investigation. A year later, the zine was finished and functions as a primer for those interested in understanding dimensionality. Within each spread, the left page is a quote that correlates to the dimension in question and, on the right, a visual approximation and brief description of the dimension and associated theory.',
       color: '272344',
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
       desc: 'Kathleeen is an author and wanted a site redesign in conjunction with the release of her new book, <em>The Best Worst Thing</em>. A visual language was constructed around book and cover design. Utilizing her existing Squarespace framework, plenty of hacking was required to achieve the look and feel desired, while maintaining her ability to frequently update her audience with fresh content.',
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
       desc: 'Development and asset integration. Design by <a href="http://alexharris.co" target="_blank">Alex Harris</a>. Built in Wordpress.',
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
