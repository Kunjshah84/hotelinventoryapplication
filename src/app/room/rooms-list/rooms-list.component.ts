import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, input } from '@angular/core';
import { NgFor , NgIf , NgClass} from '@angular/common';
import { DatePipe } from '@angular/common';
import { RoomList } from '../rooms';


@Component({
  selector: 'hinv-rooms-list',
  imports: [NgFor , NgClass , DatePipe ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection :  ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges{
  // Here i want to receive the data from the parent component
  @Input() rooms : RoomList[] =[];
  // Here we just want that if the userd is gonna click on any of the room
  // Then we have to notify the parent component about that that the parent need to perform the action on that..!
  @Output() selectedRoom = new EventEmitter<RoomList>();

  // For studying onchange lyfecycle hook
  @Input() title : string ='';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(selectedRoom : RoomList) : void {
    this.selectedRoom.emit(selectedRoom);
  }
}
