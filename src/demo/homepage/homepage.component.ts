import { Component, OnInit, Inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  title="";
  constructor(
    @Inject('CONFIG') private config,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    // console.log(this.config.url)
    // console.log(objectUtil.delNull(['', [], ' 123 ']))
    // this.title=objectUtil.delNull(['', [], ' 123 ']);
  }
  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }

}
