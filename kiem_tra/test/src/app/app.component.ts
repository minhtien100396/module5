import {Component} from '@angular/core';
import {PushNotificationService} from "../service/push-notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private _notification: PushNotificationService) {
    _notification.requestPermission().then(token => {
      console.log(token);
    })
  }

  ngOnInit(): void {
    // @ts-ignore
    this._notification.receiveMessage().subscribe(payload => {

    })
  }
}
