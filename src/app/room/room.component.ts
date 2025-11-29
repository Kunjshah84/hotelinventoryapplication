import { Component } from '@angular/core';
import { Room, RoomList } from './rooms'
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'hinv-room',
  imports: [NgIf, NgFor, NgClass, NgStyle,DatePipe],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  hotelName="shreennath hotel";
  numberOfRooms=10;
  hideRooms=false ; 

  room : Room={available:10, bookedrooms:5,totalRooms:20}
  // room :Room | null= null
  // There is a reasson that why we are not going to use the hidden property 
  // Like if the hidden is hitted then the elemetns inside the hidden is still there inside the DOM
  // So that can be cause the performance issue..!

// From here going to create the list of the rooms:

  RoomList :RoomList [] =[
    {
      roomNumber : 1,
      roomType: "Dulex Room",
      amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne',
      price : 500,
      image : "link",
      checkInTime : new Date(29-11-2025),
      checkOutTime : new Date(30-11-2025)
    },
    {
      roomNumber : 2,
      roomType: "super Dulex Room",
      amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne , room services',
      price : 10000,
      image : "link",
      checkInTime : new Date(29-11-2025),
      checkOutTime : new Date(30-11-2025)
    },
    {
      roomNumber : 3,
      roomType: "privace suite",
      amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne',
      price : 10000,
      image : "link",
      checkInTime : new Date(29-11-2025),
      checkOutTime : new Date(30-11-2025)
    }
  ]

  toggel(){
    this.hideRooms=!this.hideRooms;
  }
}
