import { Component, OnInit} from '@angular/core';
import { Room, RoomList } from './rooms'
import { NgIf, NgFor, NgClass, NgStyle , JsonPipe} from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from './rooms-list/rooms-list.component';



@Component({
  selector: 'hinv-room',
  imports: [NgIf, NgFor, NgClass, NgStyle,DatePipe ,NgbAlertModule ,RoomsListComponent ,JsonPipe],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent implements OnInit {
  hotelName="shreennath hotel";
  numberOfRooms=10;
  hideRooms=false ; 

  room : Room={available:10, bookedrooms:5,totalRooms:20}
  // room :Room | null= null
  // There is a reasson that why we are not going to use the hidden property 
  // Like if the hidden is hitted then the elemetns inside the hidden is still there inside the DOM
  // So that can be cause the performance issue..!

// From here going to create the list of the rooms:

  // RoomList :RoomList [] =[
  //   {
  //     roomNumber : 1,
  //     roomType: "Dulex Room",
  //     amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne',
  //     price : 500,
  //     image : "link",
  //     checkInTime : new Date(29-11-2025),
  //     checkOutTime : new Date(30-11-2025)
  //   },
  //   {
  //     roomNumber : 2,
  //     roomType: "super Dulex Room",
  //     amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne , room services',
  //     price : 10000,
  //     image : "link",
  //     checkInTime : new Date(29-11-2025),
  //     checkOutTime : new Date(30-11-2025)
  //   },
  //   {
  //     roomNumber : 3,
  //     roomType: "privace suite",
  //     amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne',
  //     price : 10000,
  //     image : "link",
  //     checkInTime : new Date(29-11-2025),
  //     checkOutTime : new Date(30-11-2025)
  //   }
  // ]

  // Shifting the list inside the ngoninit:
  RoomList : RoomList [] =[]

  ngOnInit() : void{
    this.RoomList =[
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
  }

  title: string ='Defult';

  toggel(){
    this.hideRooms=!this.hideRooms;
    this.title = "changed title";
  }


  // Var to show the selected room details
  selectedRoom!: RoomList;

  // The function which is going to be called when the event is emitted from the child component
  selectTheRooms(room : RoomList) : void {
    this.selectedRoom = room;
  }

  // To add the rooms
  addRoom() : void {
    const room : RoomList = {
      roomNumber : 4,
      roomType: "president suite",
      amenities : 'Air conditionar , Free Wi-Fi , TV , Bathroom , kitchne , room services , swimming pool',
      price : 50000,
      image : "link",
      checkInTime : new Date(29-11-2025),
      checkOutTime : new Date(30-11-2025)
    }
    // this.RoomList.push(room);

    // if ur child element is using the onpush change detection strategy then u have to create a new array
    // I mean new instance of the array and fullfile the imutebillity..!

    this.RoomList = [...this.RoomList , room];
    // BTW this is the spread operator which is going to spread all the existing elements of the array and then we are adding the new room to it..! 
  }
}
