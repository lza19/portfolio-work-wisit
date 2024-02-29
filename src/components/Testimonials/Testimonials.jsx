import React from "react";
import styles from "./Testimonials.module.css";
import im1 from './Prayut_2022.jpg';
import im2 from './elon.jpg';
import im3 from './200px-Sueb-01.jpg';


function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          The work received was good at a certain level. But they want the workers to be able to work in more ways than one.
          </p>
          <img
            src={im1}
            alt=""
          />
          <h4>Prayut</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Thank you very much for Reasonable work to wait It is very impressive work. Thank you very much for doing such a great job.
          </p>
          <img
            src={im2}
            alt=""
          />
          <h4>anonymous</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Wow, you have that idea. Very appropriate for this line of work. The work I received was very suitable. The price I paid was very reasonable. Thank you.
          </p>
          <img
            src={im3}
            alt=""
          />
          <h4>anonymous</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
