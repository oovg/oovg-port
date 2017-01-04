import { Component } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AppComponent {

}
