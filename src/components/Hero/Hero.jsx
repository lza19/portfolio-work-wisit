
import React from "react";
import styles from "./Hero.module.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Tilt from "react-parallax-tilt"
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Greetings, tech enthusiast!</p>
            <h3 className={styles.text_2}>Wisitpon Srisanga</h3>
            <p className={styles.text_3}><span>I am a </span>
              <TypeAnimation
                sequence={[
                  
                  "full-stack",
                  1000, 
                  "Web developer.",
                  1000,
                  "student",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              /></p>
            <p className={styles.text_4}>
              who crafted this online experience. Take a peek under the hood and
              see what makes it tick.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://www.linkedin.com/in/m-srisanga-338b502b6/">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011715106699">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://github.com/lza19">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/WISITPON">
                   <FaFreeCodeCamp />
                </a>
              </li>
              <li>
                <a href="#">
                   <FaSquareXTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div>
            
          </div>

          <div>
            <Tilt scale={1.5} transitionspeed={2500} TiltReverse={true}>
            <div className={styles.hero_image}></div>
            </Tilt>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;