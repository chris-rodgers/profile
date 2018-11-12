import React, { Component } from "react";
import classnames from "classnames";

class Input extends Component {
    state = {
        focussed: false,
        hasValue: false
    };
    handleFocus = () => {
        this.setState({ focussed: true });
    };
    handleBlur = () => {
        this.setState({ focussed: false });
    };
    handleChange = e => {
        const hasValue = Boolean(e.target.value);
        if (hasValue !== this.state.hasValue) {
            this.setState({ hasValue });
        }
    };
    render() {
        const { focussed, hasValue } = this.state;
        const { label, element, onChange, ...rest } = this.props;
        const labelClasses = classnames({
            overlay: true,
            active: Boolean(focussed || hasValue)
        }); // => 'foo bar'

        return (
            <div className="form_control">
                <label className={labelClasses}>{label}</label>
                {React.createElement(element, {
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onChange: e => {
                        onChange(e);
                        this.handleChange(e);
                    },
                    ...rest
                })}
            </div>
        );
    }
}

Input.defaultProps = {
    onChange: function() {},
    element: "input"
};

export default Input;
