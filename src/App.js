import React, { Component } from "react";
import classnames from "classnames";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Work from "./modules/Work";
import About from "./modules/About";
import ContactForm from "./modules/ContactForm";
import Icon, {
    html,
    javascript,
    sass,
    react,
    laravel
} from "./components/Icons";

const initialHeaderClass = "header__container--dark header__container--large";
const initialSection = undefined;

const skills = [
    {
        name: "HTML",
        path: html.path,
        fill: html.fill
    },
    {
        name: "Javascript",
        path: javascript.path,
        fill: javascript.fill
    },
    {
        name: "SASS",
        path: sass.path,
        fill: sass.fill
    },
    {
        name: "React",
        path: react.path,
        fill: react.fill
    },

    {
        name: "Laravel",
        path: laravel.path,
        fill: laravel.fill
    }
];

class App extends Component {
    sections = {};
    state = {
        headerClasses: initialHeaderClass,
        currentSection: initialSection
    };
    openWorkModal = e => {
        this.workModal.handleOpen(e);
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        const scrollY = window.scrollY;
        const heroHeight = this.hero.offsetHeight;
        const headerHeight = this.header.offsetHeight;
        let headerClasses;
        let currentSection;

        // Header color
        if (scrollY === 0) {
            headerClasses = initialHeaderClass;
        } else if (scrollY < heroHeight - headerHeight) {
            headerClasses = "header__container--dark";
        } else {
            headerClasses = "header__container--white";
        }

        if (this.state.headerClasses !== headerClasses) {
            this.setState({ headerClasses });
        }

        // Current Section
        Object.keys(this.sections).forEach((key, i) => {
            const section = this.sections[key];
            const offsetHeight = section.offsetHeight - headerHeight;
            if (scrollY >= offsetHeight) {
                currentSection = key;
            } else if (scrollY < offsetHeight) {
                // Do Nothing
            } else {
                currentSection = initialSection;
            }
        });

        if (this.state.currentSection !== currentSection) {
            this.setState({ currentSection });
        }
    };
    render() {
        const { headerClasses, currentSection } = this.state;
        const navigationClasses = section => {
            return classnames("header__navigation__item", {
                "header__navigation__item--current": Boolean(
                    currentSection === section
                )
            });
        };
        const headerHeight = this.header && this.header.offsetHeight;

        return (
            <div>
                <div
                    className={`header__container ${headerClasses}`}
                    ref={ref => (this.header = ref)}>
                    <div className="row">
                        <div className="columns">
                            <div className="header">
                                <div className="header__profile">
                                    <div className="header__profile__image" />
                                    <div className="header__profile__text">
                                        <div className="header__profile__name">
                                            Chris
                                            <br />
                                            Rodgers
                                        </div>
                                        <div className="header__profile__role">
                                            Front-end Developer
                                        </div>
                                    </div>
                                </div>
                                <div className="header__navigation show-for-large">
                                    <AnchorLink
                                        offset={headerHeight}
                                        className={navigationClasses("about")}
                                        href="#about">
                                        About Me
                                    </AnchorLink>
                                    <AnchorLink
                                        offset={headerHeight}
                                        className={navigationClasses("work")}
                                        href="#work">
                                        Work
                                    </AnchorLink>
                                    <AnchorLink
                                        offset={headerHeight}
                                        className="header__navigation__item header__navigation__item--highlighted"
                                        href="#contact">
                                        Contact
                                    </AnchorLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="contact"
                    className="hero"
                    ref={ref => (this.hero = ref)}>
                    <div>
                        <div className="row">
                            <div className="columns">
                                <div className="hero__content">
                                    <div className="hero__content__left">
                                        <h1 className="hero__text">
                                            <span>Hello, I'm</span>
                                            <br />
                                            <span>Chris Rodgers</span>
                                            <br />
                                            <span>Front-end Developer</span>
                                        </h1>
                                        <div>
                                            {skills.map((skill, i) => (
                                                <Icon
                                                    key={`skill_${i}`}
                                                    className="hero__skill"
                                                    path={skill.path}
                                                    fill={skill.fill}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hero__content__right">
                                        <ContactForm className="hero__contact text-center" />
                                        <div className="hero__photo_credit">
                                            <a
                                                href="https://unsplash.com/photos/zkv-iOagJis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                Photo by Julius Drost
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about" ref={node => (this.sections.about = node)}>
                    <About />
                </div>
                <div id="work" ref={node => (this.sections.work = node)}>
                    <Work />
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="columns">© Chris Rodgers 2018</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
