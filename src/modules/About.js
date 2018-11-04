import React, { Component } from "react";
import { CurvedCarousel } from "curved-carousel";

const photos = [
    { src: "bee-on-flower.jpg", caption: "lorem ipsum" },
    { src: "butterfly.jpg", caption: "lorem ipsum" },
    { src: "garden.jpg", caption: "lorem ipsum" },
    { src: "george-1.jpg", caption: "lorem ipsum" },
    { src: "george-2.jpg", caption: "lorem ipsum" },
    { src: "gran-canaria.jpg", caption: "lorem ipsum" },
    { src: "slinky.jpg", caption: "lorem ipsum" },
    { src: "sorrento.jpg", caption: "lorem ipsum" },
    { src: "sunset.jpg", caption: "lorem ipsum" }
];
class About extends Component {
    state = {
        selected: 0
    };
    handleClick = selected => {
        console.log(selected);
        this.setState({ selected: selected });
    };
    render() {
        const { selected } = this.state;

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
                        <a href="#name" className="button hero__button">
                            Get In Touch
                        </a>
                    </div>
                    <div className="columns large-6">
                        <div className="about__gallery">
                            <img
                                className="about__gallery__selected__image"
                                src={`/images/about/${photos[selected].src}`}
                            />
                            <p className="about__gallery__selected__caption">
                                {photos[selected].caption}
                            </p>
                            <CurvedCarousel
                                childWidth={80}
                                childHeight={200}
                                curve={10}
                                spacing={50}
                                style={{
                                    height: 110
                                }}>
                                {photos.map((photo, i) => (
                                    <div className="about__gallery__item">
                                        <div
                                            className="about__gallery__item__image"
                                            style={{
                                                backgroundImage: `url('/images/about/${
                                                    photo.src
                                                }?random=${i}')`
                                            }}
                                            onClick={() => this.handleClick(i)}
                                        />
                                    </div>
                                ))}
                            </CurvedCarousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
