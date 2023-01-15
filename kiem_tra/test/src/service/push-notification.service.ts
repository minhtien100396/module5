import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import firebase from "firebase/compat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  messagingFirebase: firebase.messaging.Messaging;

  constructor() {
    firebase.initializeApp(environment.configFirebase);
    this.messagingFirebase = firebase.messaging();
  }

  requestPermission = () => {
    return new Promise(async (resolve, rejects) => {
      const permsis = await Notification.requestPermission();
      if (permsis === "granted") {
        const tokeFirebase = this.messagingFirebase.getToken();
        resolve(tokeFirebase);
      } else {
        rejects(new Error("No se otorgaron los permisos"))
      }
    })
  }
  private messaginObservable = new Observable(observable => {
    this.messagingFirebase.onMessage(payload => {
      // @ts-ignore
      observe.next(payload);
    })
  })

  receiveMessage() {
    this.messaginObservable;
  }
}
