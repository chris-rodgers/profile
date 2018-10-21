import React, { Component } from "react";
import logo from "./logo.svg";
import Modal from "./components/Modal";

const workItems = [
    {
        name: "Ford"
    },
    {
        name: "PSA"
    },
    {
        name: "scania"
    }
];

class App extends Component {
    render() {
        return (
            <div>
                {/* <Modal /> */}
                <div className="row">
                    <div className="columns">
                        <div className="header">
                            <div className="header__profile">
                                <div className="header__profile__image" />
                                <div>
                                    <div className="header__profile__name">
                                        Chris
                                        <br />
                                        Rodgers
                                    </div>
                                    <div className="header__profile__role">
                                        Front End Developer
                                    </div>
                                </div>
                            </div>
                            <div className="header__navigation">
                                <a className="header__navigation__item header__navigation__item--current">
                                    Work
                                </a>
                                <a className="header__navigation__item">
                                    About Me
                                </a>
                                <a className="header__navigation__item">
                                    Contact
                                </a>
                                <a className="header__navigation__item header__navigation__item--highlighted">
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="columns">
                        <div className="hero">
                            <h1 className="hero__text">
                                <span>Hello, I'm</span>
                                <br />
                                <span>Chris Rodgers</span>
                                <br />
                                <span>Front End Developer</span>
                            </h1>
                            <a href="#" className="button hero__button">
                                Hire Me
                            </a>
                            <a
                                href="#"
                                className="button hero__button button--hollow">
                                See My Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {workItems.map(item => (
                        <div className="large-3 columns">
                            <div className="work__item">
                                <img className="work__item__image" src />
                                <div className="work__item__description">
                                    <div className="work__item__client">
                                        {item.client}
                                    </div>
                                    <div className="work__item__name">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
