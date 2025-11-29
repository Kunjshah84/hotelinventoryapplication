import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomComponent } from "./room/room.component";

@Component({
  selector: 'hinv-root',
  imports: [ RoomComponent],
  standalone: true,
  templateUrl: './app.component.html',
  // template:`<h1>hello world bhai<\h1>
  //   <p>yes now able to do the multiline operator..!</p>
  // `,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'hotelinventoryapplication';
}
