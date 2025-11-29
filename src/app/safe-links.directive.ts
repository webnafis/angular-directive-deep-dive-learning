import { Directive } from '@angular/core';

@Directive({
  selector: '[appSafeLinks]',
  standalone: true,
})
export class SafeLinksDirective {
  constructor() {}
}
