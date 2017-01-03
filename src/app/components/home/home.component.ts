
// Import component decorator
import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  templateUrl: './home.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

// Component class
export class HomeComponent {}
