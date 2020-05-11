import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'web-zorro';

  constructor(
    private router: Router,
  ){}
  ngOnInit(){
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe((v) => {
      console.log(v);
    });
  }
}
