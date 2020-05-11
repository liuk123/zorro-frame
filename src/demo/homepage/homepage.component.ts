import { Component, OnInit, Inject } from '@angular/core';
import { config } from 'rxjs';
import { objectUtil } from 'prime-jsutils'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    @Inject('CONFIG') private config
  ) { }

  ngOnInit() {
    console.log(this.config.url)
    console.log(objectUtil.clone(123))
  }

}
