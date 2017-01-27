import { Component, NgZone, OnInit } from '@angular/core';
import { routerTransition } from './router.animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition()
  ],
  host: {'[@routerTransition]': ''}
})
export class AppComponent implements OnInit {
  
  lastScrollTop: number = 0;
  direction: string = "";

  constructor(lc: NgZone, private router: Router) {
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
  ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}

