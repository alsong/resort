import React, { Component } from 'react';
import Title from './../title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class index extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corpolis'
            },
            {
                icon: <FaHiking />,
                title: "Endless hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corpolis'
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corpolis'
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, corpolis'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
            </section>
        )
    }
}
