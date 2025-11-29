export interface Room{
    available:number,
    bookedrooms:number,
    totalRooms:number
}

export interface RoomList{
    roomNumber:number ;
    roomType : string 
    amenities : string ,
    price : number ,
    image : string
    checkInTime : Date;
    checkOutTime: Date
}