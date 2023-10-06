// import React from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card.jsx'
import resume from './resume.pdf'
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition ={duration:2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
      <span>services</span>
      <span>Sample dummy text of printing of services component sample text<br/>
      sample dummy text</span>
      <a href={resume} download ><button className='button s-button' style={{fontSize:'15px'}}>Download CV</button></a>
      <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
      <div className="cards">

      <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card 
          emoji={HeartEmoji}
          heading={'Design'}
          details={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}/>
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card 
          emoji={Glasses}
          heading={'Developer'}
          details={'HTML, CSS, JavaScript, ReactJs'}/>
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card 
          emoji={Humble}
          heading={'UI/UX'}
          details={'Dummy text for ui/ux card reactjs nodejs sql'}/>
        </motion.div>
        <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services