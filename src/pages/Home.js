import React from 'react';
import Hero from './../components/hero';
import Banner from './../components/banner';
import { Link } from 'react-router-dom';
import Services from './../components/services';
import FeaturedRooms from './../components/featuredrooms';

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
        </React.Fragment>
    )
}
