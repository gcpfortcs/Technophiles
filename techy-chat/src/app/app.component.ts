import { MessageService } from './message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Techy-Chat';
  message = '';
  chats = [];
  user;
  username;
    constructor(private messageService: MessageService) {
      this.messageService.getChats().subscribe((data) => {
        this.chats = data;
        window.setTimeout(() => {
          const elem = document.getElementById('scrolldiv');
          elem.scrollTop = elem.scrollHeight;
          window.scrollTo(0,document.body.scrollHeight);
        }, 500);
      });
    }
    addChat() {
      if (this.message.length === 0) {
        return;
      }
      this.messageService.addChat(this.message);
      this.message = '';
      window.setTimeout(()=>{
        window.scrollTo(0,document.body.scrollHeight);
      },100);
    }

    addUser(user) {
      this.messageService.addUser(user);
      this.username = user;
    }
}