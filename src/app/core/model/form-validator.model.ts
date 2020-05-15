// import {ObjectUtilService} from '../utils/object-util.service';

export class FormValidatorModel {
  // 最小数字
  min: number;
  // 最大数
  max: number;
  // 最大小数位数
  maxScale: number;
  // 小数位数
  scale: number;
  // 指定长度
  length: number;
  // 最小长度
  minLength: number;
  // 最大长度
  maxLength: number;
  // 左空格是否去除
  trimL: boolean;
  // 右空格是否去除
  trimR: boolean;
  // 左、右空格是否去除
  trimLR: boolean;
  // 左、右、中空格是否去除
  trim: boolean;
  // 校验规则
  value: any;
  // 校验结果key，默认为：pattern
  key: string;
  // 错误消息key，默认为：error
  errorMsgKey: string;
  // 错误消息
  errorMsg: string;

  [key: string]: any;

  static init(obj: any): FormValidatorModel {
    // const objUtil = new ObjectUtilService();
    const model = new FormValidatorModel();
    // if (objUtil.isString(obj)) {
    //   model.value = obj;
    // } else if (obj instanceof FormValidatorModel) {
    //   return obj;
    // } else if (objUtil.isObject(obj)) {
    //   Object.assign(model, obj);
    // }
    return model;
  }

  defaultValue(errorMsg = '校验未通过'): FormValidatorModel {
    const model = new FormValidatorModel();
    model.key = 'pattern';
    model.errorMsgKey = 'error';
    model.errorMsg = errorMsg;
    return model;
  }

}
