import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SocketService } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit, OnChanges {
  messages: string[] = [];
  constructor(private socketService: SocketService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  id: number;

  messageBox: Element;

  ngOnInit(): void {
    this.socketService.listen('message').subscribe((data) => {
      console.log(data);

      this.id = data.id;
      this.messages.push(data.message);
      this.scrollToBottom();
    });
    //subscribe to socket and get messages
  }

  ngAfterViewInit(): void {
    this.messageBox = document.getElementsByClassName('messages')[0];
    console.log(this.messageBox);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messageBox.scrollTop = this.messageBox.scrollHeight;
    }, 0);
  }
}
