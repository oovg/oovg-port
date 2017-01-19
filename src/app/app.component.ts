import { Component, NgZone } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition()
  ],
  host: {'[@routerTransition]': ''}
})
export class AppComponent {
  
  lastScrollTop: number = 0;
  direction: string = "";

  constructor(lc: NgZone) {
     window.onscroll = () => {
        let st = window.pageYOffset;
        let dir = '';
        if (st > this.lastScrollTop) {
            dir = "down";
        } else {
            dir = "up";
        }
        this.lastScrollTop = st;
        lc.run(() => {
          this.direction = dir;
        });
      };
  }
}

