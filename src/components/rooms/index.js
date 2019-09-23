import React from 'react';
import RoomsFilter from './../roomsfilter';
import RoomsList from './../roomslist';
import { RoomConsumer } from './../../Context';
import Loading from './../loading';

export default function index() {
    return (
        <RoomConsumer>
            {
                value => {
                    const { loading, sortedRooms, rooms} = value;
                    if(loading){
                        return <Loading/>
                    }
                    return (
                        <div>
                            <RoomsFilter rooms={rooms} />
                            <RoomsList rooms={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}
