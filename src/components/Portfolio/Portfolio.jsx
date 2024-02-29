import React from 'react'
import styles from './Portfolio.module.css'
import pro1 from './pro1.png';
import pro2 from './pro2.png';
import pro3 from './pro3.png';
import pro4 from './pro4.png';


function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={pro4} alt="#" />
            <p><center>FFC</center></p>
        </div>
        <div className={styles.port_items}>
            <img src={pro1} alt="#" />
            <p><center>Registration Form FCC</center></p>
        </div>
        <div className={styles.port_items}>
            <img src={pro3} alt="" />
            <p><center>Thai mooc</center></p>
        </div>
      
      </div>
    </div>
  )
}

export default Portfolio