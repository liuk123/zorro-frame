import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MessageUtilService } from 'prime-zorro'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {

  title="";
  constructor(
    @Inject('CONFIG') private config,
    private messageUtil: MessageUtilService,
  ) { }

  ngOnInit() {}
  createBasicMessage(): void {
    this.messageUtil.success();
  }
}

