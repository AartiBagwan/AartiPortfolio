import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import React from 'react'


const skills = () => {
  return (
    <div ref={Skils} className='FirstSkil'>
    <h1 id='SkilHeading'><u>Skil</u></h1>
    <div className='SecoundSkil'>

      <span><FaHtml5 id='Facss' /><br></br><b id='Icone'>HTML</b></span>

      <span><FaCss3Alt id='Facss' /><br></br><b id='Icone'>CSS</b></span>

      <span><FaBootstrap id='Facss' /><br></br><b id='Icone'>Bootstrap</b></span>

      <span><DiJavascript id='Facss' /><br></br><b id='Icone'>Javascript</b></span>

      <span><TbBrandReact id='Facss' /><br></br><b id='Icone'>React</b></span>

      <span><TbBrandVscode id='Facss' /><br></br><b id='Icone'>VS code</b></span>

      <span><FaGitAlt id='Facss' /><br></br><b id='Icone'>Git</b></span>

      
    </div>
  </div>
  )
}

export default skills
