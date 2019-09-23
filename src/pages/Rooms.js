import React from 'react';
import Hero from './../components/hero';
import Banner from './../components/banner';
import { Link } from 'react-router-dom';
import RoomsContainer from './../components/rooms';

export default function Rooms() {
    return (
        <React.Fragment
        >
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </React.Fragment>
    )
}
