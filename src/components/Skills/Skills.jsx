// import React from 'react'
import './Skills.css'
import react from '../../img/rect.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/js.png'
import python from '../../img/python.png'
import React, { useContext } from "react";
import { themeContext } from "../../Context";

import { motion } from "framer-motion";

const Skills = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works' id='Skills'>

<div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Technical</span>
      <span>Skills</span>
      <span>Sample dummy text of printing of services <br/>
      component sample text<br/>
      component sample text<br/>
      sample dummy text</span>

      <button className='button s-button' style={{fontSize:'15px'}}>
        Hire me</button>
      <div className="blur s-blur1" style={{background:'#ABF1FF94'}}>

      </div>
      </div>
      {/* rightside */}
      <div className="skills-right">
      <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className='skills-main-circle'
        >
        <div className="skills-sec-circle">
      <img src={react} alt="" />
        </div>
        <div className="skills-sec-circle">
      <img src={html} alt="" />
        </div>
        <div className="skills-sec-circle">
      <img src={css} alt="" />
        </div>
        <div className="skills-sec-circle">
      <img src={js} alt="" />
        </div>
        <div className="skills-sec-circle">
      <img src={python} alt="" />
        </div>
      </motion.div>
      {/* background */}
      <div className="s-backcircle bluecircle"></div>
      <div className="s-backcircle yellowcircle"></div>
      </div>
    </div>
  )
}

export default Skills