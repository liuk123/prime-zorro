import {Injectable} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Result} from '../model/result.model';
import {HttpResponseAlertStatus} from '../model/http-response-alert-status.model';
@Injectable({
  providedIn: 'root'
})
export class MessageUtilService {

  
  MSG_SUCESS="操作成功！";
  MSG_ERROR="操作失败！";
  MSG_WARN="操作有误！";

  constructor() {
  }

 
}
