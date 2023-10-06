// import React from 'react'

import './Intro.css'
import Github from '../../img/github2.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram6.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy1.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
// import FloatingDiv from '../FloatingDiv/FloatingDiv.jsx'
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
const Intro = () => {
    const transition ={duration:2, type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className="intro">
        <div className="i-left">
<div className="i-name">
    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
    <span
        >Srikanth Devabattula</span>
    <span>I'm a Frontend Developer based in Andhra Pradesh, India. I love to learn and explore new technologies. Love almost all the stacks of Software Engineering. My current stack includes Nodejs, Reactjs, Bootstrap, Material UI, Expressjs, SQLite, Firebase, python, etc.</span>
</div>
<button className="button i-button">Hire me</button>
<div className="i-icons">
    <a href='https://github.com/srikanthdevabattula'  target='new'> <img src={Github} alt='' /></a>
   <a href='https://www.linkedin.com/in/srikanth-devabattula-a22065141/' target='blank'><img src={Linkedin} alt='' /></a>
   <a href='https://www.instagram.com/accounts/onetap/?next=%2F' target='blank'><img src={Instagram} alt='' /></a>
</div>
        </div>
        <div className="i-right">

            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={boy} alt='' />
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />

             <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
                <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                
            </motion.div>
            <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
                <FloatingDiv image={thumbup} txt1='Best' txt2='Design' />
                
            </motion.div>
            <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
            <div className="blur" style={{background:'#C1F5FF',
        top:'14rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro