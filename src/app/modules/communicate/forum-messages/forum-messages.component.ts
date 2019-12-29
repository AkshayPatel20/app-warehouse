import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-forum-messages',
  templateUrl: './forum-messages.component.html',
  styleUrls: ['./forum-messages.component.css']
})
export class ForumMessagesComponent implements OnInit {
  socket;
  MessageBoxTxt = '';

  postMessageValue = '';

  connectedUser = 0;

  constructor(private render: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.socket = socketIo('https://app-warehouse-backend.herokuapp.com');


    // Online User Count
    this.socket.on('connected_User', (data) => {
      this.connectedUser = data.user_count;
    });

    // Receving Username And Message from Server
    this.socket.on('NewMessage', (data) => {
        console.log(data);
        const mainDiv = document.getElementById('message-wrap');
        const mainContentDiv = document.getElementById('ContentMessageDiv');
        const UserName = window.localStorage.getItem('UserName');

        // Making First letter Captial
        const DisplayTitleName =  data.username.charAt(0).toUpperCase() + data.username.slice(1);

        if(UserName == data.username) {

          const divChat = this.render.createElement('div');
          this.render.addClass(divChat, 'chat');

          const divBubble = this.render.createElement('div');
          this.render.addClass(divBubble, 'bubble');
          this.render.addClass(divBubble, 'you');

          const pTitle = this.render.createElement('p');
          const pTitleText = this.render.createText(DisplayTitleName);
          this.render.addClass(pTitle, 'chat-title');
          this.render.appendChild(pTitle, pTitleText);

          const pMessage = this.render.createElement('p');
          const pMessageText = this.render.createText(data.message);
          this.render.addClass(pMessage, 'chat-message');
          this.render.appendChild(pMessage, pMessageText);

          this.render.appendChild(mainDiv, divChat);
          this.render.appendChild(divChat, divBubble);
          this.render.appendChild(divBubble, pTitle);
          this.render.appendChild(divBubble, pMessage);

          mainContentDiv.scrollTop = mainContentDiv.scrollHeight;

        } else {

          const divChat = this.render.createElement('div');
          this.render.addClass(divChat, 'chat');

          const divBubble = this.render.createElement('div');
          this.render.addClass(divBubble, 'bubble');
          this.render.addClass(divBubble, 'me');

          const pTitle = this.render.createElement('p');
          const pTitleText = this.render.createText(DisplayTitleName);
          this.render.addClass(pTitle, 'chat-title');
          this.render.appendChild(pTitle, pTitleText);

          const pMessage = this.render.createElement('p');
          const pMessageText = this.render.createText(data.message);
          this.render.addClass(pMessage, 'chat-message');
          this.render.appendChild(pMessage, pMessageText);

          this.render.appendChild(mainDiv, divChat);
          this.render.appendChild(divChat, divBubble);
          this.render.appendChild(divBubble, pTitle);
          this.render.appendChild(divBubble, pMessage);

          mainContentDiv.scrollTop = mainContentDiv.scrollHeight;

        }

    }); // close new_message

    this.socket.on('typing', (data) => {
      console.log(data);
      const mainDivMessageType = document.getElementById('SubTitleMessage');
      // Making First letter Captial
      const DisplayTitleNameType =  data.username.charAt(0).toUpperCase() + data.username.slice(1);

      const TypeMessage = this.render.createText('(' + DisplayTitleNameType + ' is Typing...)');

      if(window.localStorage.getItem('UserName') != data.username) {
        this.render.appendChild(mainDivMessageType, TypeMessage);
      }

      setInterval(() => {
        this.render.removeChild(mainDivMessageType, TypeMessage);
        }, 100);




    }); // close typing



    // Sending Username to Server
    this.socket.emit('change_username', {username: window.localStorage.getItem('UserName')});

  }// close ngOnInit

  onEnterPress(value: string){
    // Sending Message to Server
    this.MessageBoxTxt = value;
    this.socket.emit('new_message', {message: this.MessageBoxTxt});
    this.postMessageValue = ' ';
  }

  onkeyUp() {
    this.socket.emit('typing');
  }



}
