import { Component, OnInit, Inject } from '@angular/core';
import { config } from 'rxjs';

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
  }

}
