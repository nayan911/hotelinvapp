import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
    hotelName = "Hilton Hotel"
    numberofrooms = 5

    hiderooms = false;

    rooms: Room = {
          totalRooms: 20,
          availableRooms: 10,
          bookedRooms:5,
    };
    // constructor() {
    //   this.rooms= [
    //     {
    //       availableRooms: 10,
    //       bookedRooms:1,
    //     }
    //   ]
    // }

    roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: "Delux Room",
      amenities: "Air Conditioner , wifi",
      price: 500,
      photos: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2023'),
      chechoutTime: new Date('12-Nov-2023'),
  },
  {
      roomNumber: 2,
      roomType: "Super Delux Room",
      amenities: "Air Conditioner , wifi",
      price: 600,
      photos: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('12-Nov-2023'),
      chechoutTime: new Date('13-Nov-2023'),
  }
]
  }

    toggle(){
        this.hiderooms = !this.hiderooms;
    }

    selectedRoom: RoomList | null = null; // declare selectedRoom first
    selectRoom(room: RoomList){
      this.selectedRoom = room
    }

    addRoom(){
      const room: RoomList = {
        roomNumber: 2,
        roomType: "Super Delux Room",
        amenities: "Air Conditioner , wifi",
        price: 600,
        photos: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        checkinTime: new Date('12-Nov-2023'),
        chechoutTime: new Date('13-Nov-2023'),
      }
      // this.roomList.push(room);
      this.roomList = [...this.roomList,room] // better way
    }
}
