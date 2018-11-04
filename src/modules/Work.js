import React, { Component } from "react";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";

const workItems = [
    {
        name: "Ford",
        thumbnail: "/images/work/ford.jpg",
        color: "#062b68",
        href: "http://fordtradeparts.co.uk/"
    },
    {
        name: "Scania",
        thumbnail: "/images/work/scania.jpg",
        color: "#090047"
    },
    {
        name: "Volvo",
        thumbnail: "/images/work/volvo.jpg",
        color: "#191919"
    },
    {
        name: "PSA",
        thumbnail: "/images/work/psa.jpg",
        color: "#480075",
        href: "https://tradeteam.co.uk/"
    },
    {
        name: "RLA",
        thumbnail: "/images/work/rla.jpg",
        color: "#9b1f00",
        href: "https://rla.co.uk/"
    },
    {
        name: "Cortex",
        thumbnail: "/images/work/cortex.jpg",
        color: "#9b1f00"
    }
];

class Work extends Component {
    openModal = e => {
        this.workModal.handleOpen(e);
    };
    render() {
        const carouseProps = {
            initialSlideHeight: 600,
            wrapAround: true
        };
        return [
            <div className="work">
                <div className="row">
                    <div className="columns">
                        <h1 className="work__title text-center">Work</h1>
                    </div>
                </div>
                <div className="row">
                    {workItems.map((item, i) => {
                        const clipId = `clip-${item.name}`;
                        const isExternal = Boolean(item.href);
                        const anchorProps = isExternal
                            ? { href: item.href, target: "_blank" }
                            : { onClick: this.openModal };

                        console.log(anchorProps);

                        return (
                            <div className="medium-6 large-4 columns">
                                <div className="work__item">
                                    <div className="work__item__image">
                                        <a {...anchorProps}>
                                            <div className="work__item__overlay">
                                                {isExternal
                                                    ? "Visit Site"
                                                    : "Read More"}
                                            </div>
                                            <img
                                                className=""
                                                src={item.thumbnail}
                                            />
                                        </a>
                                    </div>
                                    <div className="work__item__title">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>,
            <Modal innerRef={node => (this.workModal = node)}>
                <div className="work__modal">
                    <div className="work__modal__carousel">
                        <Carousel
                            height="100%"
                            items={[
                                { src: "/images/work/ford/tradeparts/1.png" },
                                { src: "/images/work/ford/tradeparts/2.png" },
                                { src: "/images/work/ford/tradeparts/3.png" },
                                { src: "/images/work/ford/tradeparts/4.png" }
                            ]}
                        />
                    </div>

                    <div className="work__modal__content">
                        <h3>Lorem Ipsum Dolor Sit Amet</h3>
                        <p>Lorem Ipsum Dolor Set Amet</p>
                    </div>
                </div>
            </Modal>
        ];
    }
}

export default Work;
