import React, { Component } from "react";
import Carousel from "../components/Carousel";
import AnchorLink from "react-anchor-link-smooth-scroll";

const items = [
    { src: "/images/about/george-1.jpg", caption: "Our beautiful cat, George" },
    {
        src: "/images/about/butterfly.jpg",
        caption: "I love nature, and taking photos"
    },
    { src: "/images/about/garden.jpg", caption: "An attempt at gardening" },
    { src: "/images/about/gran-canaria.jpg", caption: "Gran Canaria - 2018" },
    {
        src: "/images/about/sorrento.jpg",
        caption: "Our view over the bay of Naples - 2017"
    }
];
class About extends Component {
    state = {
        selected: 0,
        slideIndex: 0
    };
    handleAfterSlide = selected => {
        console.log(selected);
        this.setState({ selected: selected });
    };
    handleClick = slideIndex => {
        this.setState({ slideIndex });
    };
    render() {
        const { selected, slideIndex } = this.state;

        return (
            <div className="about">
                <div className="row text-center">
                    <div className="columns">
                        <h1 className="about__title">Who Am I?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="columns large-6">
                        <p>
                            Hello! As you’ll probably have gathered, my name is
                            Chris and I’m a Front-End Developer, based in
                            Bournemouth, UK. Enthusiastic about all things
                            digital, I have a love of plants, animals, travel,
                            skiing, running, anything arty, cheesy pop and
                            spending time outdoors.
                        </p>
                        <p>
                            Development wise, my preferred weapons of choice are
                            React, SASS and Laravel (for a front-end developer,
                            I’m starting to get pretty good at PHP too!). I’m a
                            pretty quick learner so I find it doesn’t take me
                            long to pick up a new Framework. I’d love to know
                            more about Vue for example.
                        </p>
                        <p>
                            I think photos speak a thousand words so here are a
                            few of my favourites:
                        </p>
                        <p>Thanks for listening!</p>
                        <AnchorLink
                            offset={200}
                            href="#contact"
                            className="button hero__button">
                            Get In Touch
                        </AnchorLink>
                    </div>
                    <div className="columns large-6">
                        <div className="about__gallery">
                            <Carousel height={500} items={items} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
