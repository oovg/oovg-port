// ====== ./app/components/about/about.component.ts ======

// Import component decorator
import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  templateUrl: './not-found.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

// Component class
export class NotFoundComponent {}
