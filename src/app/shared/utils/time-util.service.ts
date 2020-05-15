import {Injectable} from '@angular/core';
import { objectUtil } from 'prime-jsutils'

@Injectable({
  providedIn: 'root'
})
export class TimeUtilService {

  FORMAT_FULL = 'yyyy-MM-dd hh:mm:ss';
  FORMAT_FULL_CN = 'yyyy年MM月dd日 hh时mm分ss秒';
  FORMAT_YMD_HM = 'yyyy-MM-dd hh:mm';
  FORMAT_YMD = 'yyyy-MM-dd';
  FORMAT_YMD_CN = 'yyyy年MM月dd日';
  FORMAT_HMS = 'hh:mm:ss';
  FORMAT_HMS_CN = 'hh时mm分ss秒';

  START_TIME_SUFFIX = ' 00:00:00';
  END_TIME_SUFFIX = ' 24:59:59';

  constructor(
  ) {
  }

  /**
   * 时间格式化
   * @param date(var dateStr = '2019-07-28 17:59:00';)
   * @param format:格式
   * @returns ：返回类型
   */
  format(date: any, format = this.FORMAT_FULL) {
    if (!date) {
      date = new Date();
    }
    return objectUtil.isString(date) ? this.formatStrToDate(date + '') : this.formatDateToStr(date, format);
  }

  /**
   * 将时间字符串转为指定字符串格式
   * @param dateStr：日期字符串
   * @param format：格式化格式
   */
  formatDateStr(dateStr: string, format = this.FORMAT_FULL):string{
    const date = this.formatStrToDate(dateStr);
    return this.formatDateToStr(date, format);
  }

  /**
   * 字符串转日期格式
   * @param dateStr：字符串时间
   */
  formatStrToDate(dateStr: string) {
    dateStr = dateStr.substring(0, 19);
    dateStr = dateStr.replace(/-/g, '/');
    const date = new Date(dateStr);
    return date;
  }

  formatDateToStr(date: Date, format = this.FORMAT_FULL) {
    const o: any = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  }
}
