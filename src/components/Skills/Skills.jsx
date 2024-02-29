import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaCss3 , FaGitAlt, FaNode} from 'react-icons/fa6'
import { FaHtml5 } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";



function Skills() {
  return (
    <div className={styles.skills_container}>
        <h3 className={styles.skills_title}>My Skills Set</h3>
        <ul className={styles.skills_list}>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaCss3 /></li>
            <li><FaGitAlt/></li>
            <li><FaNode/></li>
            <li><FaHtml5 /></li>
            <li><SiAdobephotoshop /></li>
            <li><FaFigma /></li>

        </ul>
      
    </div>
  )
}

export default Skills