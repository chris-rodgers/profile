import React, { Component } from "react";
import posed from "react-pose";

const Slide = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

export default class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 0
        };
    }
    handleChange = () => {
        const max = this.props.slides.length - 1;

        this.setState(prevState => ({
            image: prevState.image === max ? 0 : prevState.image + 1
        }));
    };

    render() {
        const { slides, duration } = this.props;
        const { image } = this.state;
        return (
            <div duration={duration} className="slideshow">
                {slides.map((slide, i) => (
                    <Slide
                        pose={image === i ? "visible" : "hidden"}
                        className="slideshow__slide"
                        style={{ backgroundImage: `url('${slide}')` }}
                        onMouseEnter={() => {
                            this.timer.pause();
                        }}
                        onMouseLeave={() => {
                            this.timer.play();
                        }}
                    />
                ))}
                <Timer
                    innerRef={node => (this.timer = node)}
                    duration={duration}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

let a = 0;

class Timer extends Component {
    constructor() {
        super();
        this.diameter = 20;
        this.radius = this.diameter / 2;
        this.angle = 360;
    }
    play = () => {
        const { handleChange } = this.props;
        const { radius, diameter, angle } = this;

        this.props.innerRef(this);

        this.timer = setInterval(() => {
            a++;
            a %= angle;

            var r = (a * Math.PI) / (angle / 2),
                x = Math.sin(r) * radius,
                y = Math.cos(r) * -radius,
                mid = a > angle / 2 ? 1 : 0,
                anim = `M 0 0 v -${radius} A ${radius} ${radius} 1 ${mid} 1 ${x} ${y} z`;

            this.loader.setAttribute("d", anim);

            if (r === 0) {
                handleChange();
            }
        }, this.props.duration / angle);
    };
    pause = () => {
        clearInterval(this.timer);
    };
    componentDidMount() {
        this.play();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        this.props.innerRef(null);
    }
    render() {
        const { radius, diameter } = this;
        return (
            <svg
                className="slideshow__timer"
                width={diameter}
                height={diameter}
                viewbox={`0 0 ${diameter} ${diameter}`}>
                <path
                    ref={node => (this.loader = node)}
                    transform={`translate(${radius}, ${radius})`}
                />
            </svg>
        );
    }
}
