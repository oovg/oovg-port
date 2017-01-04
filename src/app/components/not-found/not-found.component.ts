// ====== ./app/components/about/about.component.ts ======

// Import component decorator
import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container text"><h1>404</h1>
    <p>"Not all who wander are lost"</p>
    <a href="#" [routerLink]="['/']">Go Home</a></div>`
})

// Component class
export class NotFoundComponent {}
