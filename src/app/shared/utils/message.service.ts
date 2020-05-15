import {Injectable} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Result} from '../model/result.model';
import {HttpResponseAlertStatus} from '../model/http-response-alert-status.model';
import {Observable} from 'rxjs';
import {CanDeactivateModel} from '../model/can-deactivate.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private message: NzMessageService,
              private modalService: NzModalService) {
  }

  /**
   * 默认的消息提醒
   * @param resust:返回的结果
   * @param status:成功或失败是否提醒
   */
  default(resust: Result, status = HttpResponseAlertStatus.ALL) {
    if (!resust.isSuccess) {
      console.log(resust);
    }
    if (resust && resust.isSuccess() && (status === HttpResponseAlertStatus.ALL || status === HttpResponseAlertStatus.SUCCESS)) {
      this.success(resust.resultMsg);
    } else if (resust && !resust.isSuccess() && (status === HttpResponseAlertStatus.ALL || status === HttpResponseAlertStatus.FAIL)) {
      this.error(resust.resultMsg);
    }
  }

  /**
   * 操作成功的消息
   * @param message:需要提醒的消息
   */
  success(message = '操作成功！'): void {
    this.message.create('success', message);
  }

  /**
   * 操作失败的消息
   * @param message:需要提醒的消息
   */
  error(message = '操作失败！'): void {
    this.message.create('error', message);
  }

  /**
   * 操作有误的消息
   * @param message:需要提醒的消息
   */
  warning(message = '操作有误！'): void {
    this.message.create('warning', message);
  }

  /**
   * 表单离开时
   */
  // canDeactivate() {
  //   const modal = this.modalService.create({
  //     nzTitle: CanDeactivateModel.title,
  //     nzContent: CanDeactivateModel.content,
  //     nzFooter: [{
  //       label: CanDeactivateModel.cancelText,
  //       onClick: componentInstance => {
  //         modal.close(CanDeactivateModel.cancelCode);
  //       }
  //     }, {
  //       label: CanDeactivateModel.okText,
  //       onClick: componentInstance => {
  //         modal.close(CanDeactivateModel.okCode);
  //       }
  //     }, {
  //       label: CanDeactivateModel.okSaveText,
  //       type: 'primary',
  //       onClick: componentInstance => {
  //         modal.close(CanDeactivateModel.okSaveCode);
  //       }
  //     }],
  //   });
  //   return modal;
  // }

  // confirm({okText = '离开', cancelText = '取消', content = '你已经填写了部分表单，离开会放弃已填写的内容。', title = '确认要离开吗？'} = {}): Observable<any> {
  //   return new Observable(observer => {
  //     this.modalService.confirm({
  //       nzTitle: title,
  //       nzContent: content,
  //       nzOkText: okText,
  //       nzCancelText: cancelText,
  //       nzOnOk: () => {
  //         observer.next(true);
  //         observer.complete();
  //       },
  //       nzOnCancel: () => {
  //         observer.next(false);
  //         observer.complete();
  //       }
  //     });
  //   });
  // }
}
