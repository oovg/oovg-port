import { Component, NgZone, OnInit } from '@angular/core';
import { routerTransition } from './router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar'

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

  constructor(lc: NgZone, private slimLoadingBarService: SlimLoadingBarService, private router: Router) {
    
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
  
  startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }
 
    stopLoading() {
        this.slimLoadingBarService.stop();
    }
 
    completeLoading() {
        this.slimLoadingBarService.complete();
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

