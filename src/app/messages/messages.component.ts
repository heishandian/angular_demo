import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
/**
 * 从 HeroService 中显示消息
 MessagesComponent 可以显示所有消息， 包括当 HeroService 获取到英雄数据时发送的那条。
 修改构造函数，添加一个 public 的 messageService 属性。 Angular 将会在创建 MessagesComponent 的实例时 把 MessageService 的实例注入到这个属性中。
 这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它。
 Angular 只会绑定到组件的公共属性。
 */
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
