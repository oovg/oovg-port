import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return fadeRoute();
}

function fadeRoute() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width: '100%', left:'0'}) ),
    state('*', style({position:'absolute', width: '100%', left:'0'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({opacity: '0'}),
      animate('0.3s ease-in-out', style({opacity: '1'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({opacity: '1'}),
      animate('0.3s ease-in-out', style({opacity: '0'}))
    ])
  ]);
}