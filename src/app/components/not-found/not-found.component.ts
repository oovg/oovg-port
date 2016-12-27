// ====== ./app/components/about/about.component.ts ======

// Import component decorator
import { Component } from '@angular/core';

@Component({
  template: `
    <h2>404</h2>
    <p>"Not all who wander are lost"</p>
    <a href="#" [routerLink]="['/']">Go Home</a>`
})

// Component class
export class NotFoundComponent {}
