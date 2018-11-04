import React, { Component } from "react";
import { CurvedCarousel } from "curved-carousel";

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="row text-center">
                    <div className="columns" />
                </div>
                <div className="row">
                    <div className="columns large-6">
                        <h1 className="about__title">Who Am I?</h1>
                        <p>
                            Hello! As you’ll probably have gathered, my name is
                            Chris and I’m a Front-End Developer, based in
                            Bournemouth, UK. Enthusiastic about all things
                            digital, I have a love of plants, animals, travel,
                            skiing, running, anything arty, cheesy pop and
                            spending time outdoors.
                        </p>
                        <p>
                            Development wise, my preferred weapons of choice are
                            React, SASS and Laravel (for a front-end developer,
                            I’m starting to get pretty good at PHP too!). I’m a
                            pretty quick learner so I find it doesn’t take me
                            long to pick up a new Framework. I’d love to know
                            more about Vue for example.
                        </p>
                        <p>
                            I think photos speak a thousand words so here are a
                            few of my favourites:
                        </p>
                        <p>Thanks for listening!</p>
                        <a href="#name" className="button hero__button">
                            Get In Touch
                        </a>
                    </div>
                    <div className="columns large-6">
                        <CurvedCarousel
                            childWidth={100}
                            curve={10}
                            spacing={10}
                            rotation={10}
                            style={{
                                height: 350
                            }}>
                            <img src="http://s30.postimg.org/r1tgqbr31/MV5_BMj_A1_MTQ3_Nz_U1_MV5_BMl5_Ban_Bn_Xk_Ft_ZTgw_MDE3_Mjg0_Mz_E.jpg" />
                            <img src="http://s30.postimg.org/dra7ajpwd/MV5_BMj_Ax_Njc0_Mj_Iy_M15_BMl5_Ban_Bn_Xk_Ft_ZTcw_NTM2_NDA4_MQ.jpg" />
                            <img src="http://s30.postimg.org/6180j5cyl/MV5_BMj_E5_NDU2_Mzc3_MV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_Nj_Aw_NTE5_OQ.jpg" />
                            <img src="http://s30.postimg.org/gith15of1/MV5_BMTA2_OTE1_Njg4_Nj_Ve_QTJe_QWpw_Z15_Bb_WU3_MDAy_Nj_U4_MDM.jpg" />
                            <img src="http://s30.postimg.org/fs0qvdm1p/MV5_BMTI3_MDc4_Nz_Uy_MV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_MTQy_MTc5_MQ.jpg" />
                            <img src="http://s30.postimg.org/xaesjwonx/MV5_BMTI4_Mzk4_MDk2_NV5_BMl5_Ban_Bn_Xk_Ft_ZTYw_ODgx_Njc4_V1.jpg" />
                            <img src="http://s30.postimg.org/suwdenc9p/MV5_BMTkx_Mzk2_MDkw_OV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_MDAx_ODQw_Mg.jpg" />
                            <img src="http://s30.postimg.org/f51u5up5p/MV5_BMTQw_MTk3_NDU2_OV5_BMl5_Ban_Bn_Xk_Ft_ZTcw_NTA3_MTI0_Mw.jpg" />
                        </CurvedCarousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
