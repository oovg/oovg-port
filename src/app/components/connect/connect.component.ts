
// Import component decorator
import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  templateUrl: './connect.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

// Component class
export class ConnectComponent {}
