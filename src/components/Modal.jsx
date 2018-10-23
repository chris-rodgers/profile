import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import classNames from "classnames";

const Overlay = posed.div({
    exit: { opacity: 0 },
    enter: { opacity: 1 }
});

const Container = posed.div(({ startPosition }) => ({
    exit: {
        opacity: 0,
        ...startPosition,
        fontSize: "10%"
    },
    enter: {
        opacity: 1,
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        fontSize: "100%"
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
        const { children, className } = this.props;
        const target = {};

        return ReactDOM.createPortal(
            <PoseGroup preEnterPose="exit">
                {open && [
                    <Overlay
                        key="shade"
                        className="modal__overlay"
                        onClick={this.handleClose}
                    />,
                    <Container
                        key="modal"
                        className={classNames("modal__container", className)}
                        startPosition={startPosition}>
                        <button
                            className="close_button"
                            onClick={this.handleClose}
                        />
                        {children}
                    </Container>
                ]}
            </PoseGroup>,
            document.getElementById("modal-root")
        );
    }
}
