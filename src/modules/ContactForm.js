import React, { Component } from "react";
import { address } from "ip";

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
        name: "",
        email: "",
        message: ""
    };

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ip: address(),
                ...this.state
            })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { ...rest } = this.props;
        const { name, email, message } = this.state;
        console.log("test");
        return (
            <form onSubmit={this.handleSubmit} {...rest}>
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

                <input type="submit" className="button button--accent" />
            </form>
        );
    }
}
