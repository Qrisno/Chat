import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  messages: string[] = [];
  constructor(private socketService: SocketService) {}
  id: number;
  ngOnInit(): void {
    this.socketService.listen('message').subscribe((data) => {
      console.log(data);

      this.id = data.id;
      this.messages.push(data.message);
    });
    //subscribe to socket and get messages
  }
}
