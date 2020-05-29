import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MessageUtilService } from 'prime-zorro'
import { NzModalService } from 'ng-zorro-antd/modal';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {

  title="webzorro";
  constructor(
    @Inject('CONFIG') private config,
    private messageUtil: MessageUtilService,
    private modal: NzModalService
  ) { }

  ngOnInit() {}
  createBasicMessage(): void {
    this.messageUtil.success();
  }

  createComponentModal(){
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: DialogComponent,
      nzGetContainer: () => document.body,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          loading: false,
          type: 'danger',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });

    const instance = modal.getContentComponent();

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }
  
}

