import { Directive } from '@angular/core';
import { AccordionLinkDirective } from './accordion-link.directive';

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective {
  protected navlinks: AccordionLinkDirective[] = [];
  constructor() { }

  closeOtherLinks(openLink: AccordionLinkDirective): void {
    this.navlinks.forEach((link: AccordionLinkDirective) => {
      if (link !== openLink) {
        // link.open = false;
      }
    });
  }
}
