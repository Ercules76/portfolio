import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import GitHub from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Vittorio Pinti</span>
                <span>Fullstack Developer with high level of experience
                    in web designing and development, producting the 
                    Quality work
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="#">
                    <img src={GitHub} alt="" />
                </a>
                <a href="#">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img id='glassesimoji' src={glassesimoji} alt="" />
            <div id='crown-badge'>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
            </div>
            <div id='thumbup-badge'>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </div>

            {/* Blur divs */}
            <div className="blur pink"></div>
            <div className="blur blue"></div>
        </div>
    </div>
  )
}

export default Intro