import React, { Component } from "react";
import posed from "react-pose";

const Container = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.5 }
});

export default class Modal extends Component {
    render() {
        return (
            <div className="modal__overlay">
                <div className="modal__container">test</div>
            </div>
        );
    }
}
