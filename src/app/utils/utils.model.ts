import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageUtilService } from './message-util.service';

const srvices = [
  MessageUtilService
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...srvices
  ]
})
export class UtilsModule {
}
