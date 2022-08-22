import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;
  readonly url = 'http://localhost:3000';
  constructor() {
    this.socket = io(this.url);
  }

  // emit event
  emitMessage(message: string, id: number) {
    //emit data from id to another user id
    this.socket.emit('message', { message, id });
  }

  // listen event
  listen(eventName: string): Observable<any> {
    return new Observable<any>((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }
}
