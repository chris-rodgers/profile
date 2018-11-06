import React, { Component } from "react";
import classnames from "classnames";

export default class FlipCard extends Component {
    state = {
        flipped: false
    };
    handleFlip = () => {
        this.setState({
            flipped: !this.state.flipped
        });
    };
    render() {
        const { flipped } = this.state;
        const { canFlip } = this.props;
        const children = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { handleFlip: this.handleFlip })
        );

        return (
            <div
                className={classnames("flip_card", {
                    "flip_card--flipped": Boolean(flipped && canFlip),
                    "flip_card--can_flip": canFlip
                })}>
                <div className="flip_card__inner">{children}</div>
            </div>
        );
    }
}

export const Front = ({ className, children, handleFlip, ...props }) => (
    <div
        className={classnames("flip_card__front", className)}
        onClick={handleFlip}
        {...props}>
        {children}
    </div>
);

export const Back = ({ className, children, handleFlip, ...props }) => (
    <div className={classnames("flip_card__back", className)} {...props}>
        <button className="close_button" onClick={handleFlip} />
        {children}
    </div>
);
