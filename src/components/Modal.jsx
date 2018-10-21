import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";

const Overlay = posed.div({
    exit: { opacity: 0 },
    enter: { opacity: 1 }
});

const Container = posed.div(props => ({
    exit: {
        opacity: 0,
        ...props.startPosition
    },
    enter: {
        opacity: 1,
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%"
    }
}));

export default class Modal extends Component {
    state = {
        open: false,
        boundingClientRect: null
    };
    componentDidMount() {
        this.props.innerRef(this);
    }
    componentWillUnmount() {
        this.props.innerRef(null);
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    handleOpen = e => {
        const rect = e.target.getBoundingClientRect();
        const startPosition = {
            width: rect.width,
            height: rect.height,
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2
        };

        this.setState({
            open: true,
            startPosition
        });
    };
    render() {
        const { open, startPosition } = this.state;
        const target = {};

        return (
            <PoseGroup preEnterPose="exit">
                {open && [
                    <Overlay
                        key="shade"
                        className="modal__overlay"
                        onClick={this.handleClose}
                    />,
                    <Container
                        key="modal"
                        className="modal__container"
                        startPosition={startPosition}>
                        <button
                            className="close_button"
                            onClick={this.handleClose}
                        />
                    </Container>
                ]}
            </PoseGroup>
        );
    }
}
