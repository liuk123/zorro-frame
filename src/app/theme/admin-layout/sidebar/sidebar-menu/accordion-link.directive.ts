import { Directive, Inject, Input, HostBinding } from '@angular/core';
import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[appAccordionLink]'
})
export class AccordionLinkDirective {

  constructor(@Inject(AccordionDirective) protected nav: AccordionDirective) {

  }

}
