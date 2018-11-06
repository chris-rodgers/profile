import React, { Component } from "react";
import FlipCard, { Front, Back } from "../components/FlipCard";

import Icon, { react, laravel, gatsby, sass } from "../components/Icons";

const fill = "currentColor";

const workItems = [
    {
        name: "Ford",
        thumbnail: "/images/work/ford.jpg",
        color: "#062b68",
        href: "http://fordtradeparts.co.uk/",
        skills: [laravel, sass],
        description: ""
    },
    {
        name: "Scania",
        thumbnail: "/images/work/scania.jpg",
        color: "#090047",
        skills: [laravel, sass],
        description: ""
    },
    {
        name: "Volvo",
        thumbnail: "/images/work/volvo.jpg",
        color: "#191919",
        skills: [laravel, react, sass],
        description: ""
    },
    {
        name: "PSA",
        thumbnail: "/images/work/psa.jpg",
        color: "#480075",
        href: "https://tradeteam.co.uk/",
        skills: [laravel, react, sass],
        description: ""
    },
    {
        name: "RLA",
        thumbnail: "/images/work/rla.jpg",
        color: "#9b1f00",
        href: "https://rla.co.uk/",
        skills: [react, gatsby],
        description: ""
    },
    {
        name: "Cortex",
        thumbnail: "/images/work/cortex.jpg",
        color: "#9b1f00",
        skills: [laravel, react],
        description: ""
    }
];

class Work extends Component {
    render() {
        return (
            <div className="work">
                <div className="row">
                    <div className="columns">
                        <h1 className="work__title text-center">Work</h1>
                    </div>
                </div>
                <div className="row">
                    {workItems.map((item, i) => {
                        const description = item.description ? (
                            item.description
                        ) : (
                            <p>{`Information on ${item.name} coming soon`}</p>
                        );

                        return (
                            <div
                                className="medium-6 large-4 columns"
                                key={`work_item${i}`}>
                                <div className="work__item">
                                    <FlipCard canFlip={true}>
                                        <Front>
                                            <div className="work__item__image">
                                                <img
                                                    src={item.thumbnail}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="work__item__title">
                                                {item.name}
                                                {item.skills.map(
                                                    (skill, index) => (
                                                        <Icon
                                                            key={`icon_${index}`}
                                                            className="work__item__skill"
                                                            path={skill.path}
                                                            fill={fill}
                                                            width={20}
                                                            height={20}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </Front>
                                        <Back className="work__item__description">
                                            <h6>{item.name}</h6>
                                            {description}

                                            <a
                                                href={item.href}
                                                target="_blank"
                                                className="button button--hollow"
                                                style={{
                                                    visibility: item.href
                                                        ? "visible"
                                                        : "hidden"
                                                }}>
                                                Visit Site
                                            </a>
                                        </Back>
                                    </FlipCard>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Work;
