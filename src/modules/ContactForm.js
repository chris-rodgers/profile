import React, { Component } from "react";
import { address } from "ip";
import { Collapse } from "react-collapse";

import Input from "../components/Input";

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

export default class ContactForm extends Component {
    state = {
        formData: {
            name: "",
            email: "",
            message: ""
        },
        outcome: ""
    };

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ip: address(),
                ...this.state.formData
            })
        })
            .then(() =>
                this.setState({
                    outcome: "Thanks, your message has been sent."
                })
            )
            .catch(error =>
                this.setState({
                    outcome: "Sorry, there was a problem. Please try again."
                })
            );

        e.preventDefault();
    };

    handleChange = e =>
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        });

    render() {
        const { ...rest } = this.props;
        const { formData, outcome } = this.state;
        const { name, email, message } = formData;

        return (
            <Collapse isOpened={true}>
                <div style={{ overflow: "hidden" }}>
                    {outcome ? (
                        <p className="text-center">{outcome}</p>
                    ) : (
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <h6>Get In Touch</h6>

                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        label="Name"
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        label="Email"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        name="message"
                                        id="message"
                                        rows="5"
                                        label="Message"
                                        element="textarea"
                                        value={message}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="button button--accent"
                                />
                            </div>
                        </form>
                    )}
                </div>
            </Collapse>
        );
    }
}
