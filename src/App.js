import React, { Component } from "react";
import logo from "./logo.svg";
import Modal from "./components/Modal";

const workItems = [
    {
        name: "Ford"
    },
    {
        name: "Volvo"
    },
    {
        name: "PSA"
    },
    {
        name: "Scania"
    },
    {
        name: "Kia"
    },
    {
        name: "FCA Group"
    },
    {
        name: "Volkswagen"
    }
];

class App extends Component {
    openWorkModal = e => {
        this.modal.handleOpen(e);
    };
    render() {
        return (
            <div>
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
                    {workItems.map((item, i) => (
                        <div className="medium-6 large-3 columns">
                            <div
                                className="work__item"
                                onClick={this.openWorkModal}>
                                <img
                                    className="work__item__image"
                                    src={`https://loremflickr.com/320/240/flowers?random=${i}`}
                                />
                                <div className="work__item__description">
                                    <div className="work__item__client">
                                        {item.client}
                                    </div>
                                    <div className="work__item__title">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="small-text-center">
                    <button className="button button--hollow">Load more</button>
                </div>
                <Modal innerRef={node => (this.modal = node)} />
            </div>
        );
    }
}

export default App;
