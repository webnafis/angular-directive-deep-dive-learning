import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
    // if log directive takes any input it should be here
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  //   queryParam = input('nsaApp');
  //   <a href="https://angular.dev" appSafeLink queryParam="nsa-docs-link"
  //   >Angular Documentation</a
  //   appSafeLink = input('nsaApp');
  queryParam = input('nsaApp', { alias: 'appSafeLink' });
  // i can inject here services
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('SafeLinkDirective is active!');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      //   const address = (event.target as HTMLAnchorElement).href;
      //   (event.target as HTMLAnchorElement).href =
      //     address + '?from=' + this.queryParam();
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
