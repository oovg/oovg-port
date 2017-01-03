// ====== ./app/components/about/about.component.ts ======

// Import component decorator
import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  templateUrl: './about.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

// Component class
export class AboutComponent {}
