import React, { Component } from "react";
import Carousel from "nuka-carousel";

class Work extends Component {
    render() {
        return (
            <div className="about">
                <div className="row text-center">
                    <div className="columns" />
                </div>
                <div className="row">
                    <div className="columns large-4">
                        <img src="" width="400" height="500" />
                    </div>
                    <div className="columns large-8">
                        <h6>About Me</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <a href="#" className="button hero__button">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
