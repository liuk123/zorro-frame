import { Component, OnInit, Inject } from '@angular/core';
import { MessageUtilService } from 'prime-zorro'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  title="";
  constructor(
    @Inject('CONFIG') private config,
    private messageUtil: MessageUtilService,
  ) { }

  ngOnInit() {
    // console.log(this.config.url)
  }
  createBasicMessage(): void {
    this.messageUtil.success();
  }

}

