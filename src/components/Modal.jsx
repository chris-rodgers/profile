import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import classNames from "classnames";

const Modal = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

const Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

export default class ModalGroup extends Component {
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
    handleOpen = () => {
        this.setState({
            open: true
        });
    };
    render() {
        const { open } = this.state;
        const { children, className } = this.props;

        return ReactDOM.createPortal(
            <PoseGroup>
                {open && [
                    // If animating more than one child, each needs a `key`
                    <Shade
                        key="shade"
                        className="shade"
                        onClick={this.handleClose}
                    />,
                    <Modal
                        key="modal"
                        className={classNames("modal", className)}>
                        <button
                            className="close_button"
                            onClick={this.handleClose}
                        />
                        {children}
                    </Modal>
                ]}
            </PoseGroup>,
            document.getElementById("modal-root")
        );
    }
}
