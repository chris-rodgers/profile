import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import classNames from "classnames";

const delay = {
    transition: {
        delay: 250
    }
};

const Overlay = posed.div({
    exit: {
        opacity: 0,
        ...delay
    },
    enter: { opacity: 1 }
});

const Container = posed.div(({ startPosition }) => ({
    exit: {
        opacity: 0,
        ...startPosition,
        fontSize: "10%",
        ...delay
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

const Content = posed.div({
    exit: { opacity: 0 },
    enter: {
        opacity: 1,
        ...delay
    }
});

export default class Modal extends Component {
    state = {
        open: false
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
        const childrenWithProps = React.cloneElement(children, {
            pose: open ? "enter" : "exit",
            delay: { ...delay }
        });

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

                        {childrenWithProps}
                    </Container>
                ]}
            </PoseGroup>,
            document.getElementById("modal-root")
        );
    }
}
