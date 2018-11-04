import React, { Component } from "react";
import Carousel from "nuka-carousel";

export default class Slideshow extends Component {
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
        const { items, height, ...rest } = this.props;
        return (
            <div className="carousel" style={{ height }}>
                <div
                    className="carousel__selected__image"
                    style={{
                        backgroundImage: `url('${items[selected].src}')`
                    }}
                />
                <Carousel
                    className="carousel__slider"
                    slidesToShow={4}
                    wrapAround={true}
                    cellAlign="center"
                    afterSlide={x => this.handleAfterSlide(x)}
                    withoutControls={true}
                    slideIndex={slideIndex}
                    {...rest}>
                    {items.map((item, i) => (
                        <div
                            className="carousel__item"
                            onClick={() => this.handleClick(i)}
                            style={{
                                backgroundImage: `url('${item.src}')`
                            }}
                        />
                    ))}
                </Carousel>{" "}
                {items[selected].caption && (
                    <p className="carousel__selected__caption">
                        {items[selected].caption}
                    </p>
                )}
            </div>
        );
    }
}
