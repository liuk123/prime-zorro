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
    private message: NzMessageService,
  ) { }

  ngOnInit() {
  }
  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }

}
