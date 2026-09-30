import styles from "./Contact.module.css";

import { FiMapPin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      {/* Decorative elements */}
      <div className={styles.decorTop} aria-hidden="true" />
      <div className={styles.decorBottom} aria-hidden="true" />

      <div className={styles.container}>

        {/* =========================
            LEFT
        ========================= */}

        <div className={styles.content}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>CONTACT US</span>
          </div>

          <h2 className={styles.title}>
            <span className={styles.green}>Come</span>
            <span className={styles.red}>Play</span>
            <span className={styles.green}>With Us.</span>
          </h2>

          <p className={styles.description}>
            Have a question, want to join the club, or
            interested in our events? We’d love to hear
            from you.
          </p>

        </div>


        {/* =========================
            DIVIDER
        ========================= */}

        <div className={styles.divider} aria-hidden="true" />


        {/* =========================
            RIGHT
        ========================= */}

        <div className={styles.cards}>

          {/* LOCATION */}

          <div className={styles.card}>

            <div className={styles.iconBox}>
              <FiMapPin />
            </div>

            <div className={styles.cardContent}>
              <h3>Location</h3>

              <p>
                Dadra &amp; Nagar Haveli and
                <br />
                Daman &amp; Diu, India
              </p>
            </div>

          </div>


          {/* EMAIL */}

          <a
            href="mailto:dnheddchess@gmail.com"
            className={styles.card}
          >

            <div className={styles.iconBox}>
              <FiMail />
            </div>

            <div className={styles.cardContent}>
              <h3>Email</h3>

              <p>
                dnheddchess@gmail.com
              </p>
            </div>

          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/919904901848"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >

            <div className={styles.iconBox}>
              <FaWhatsapp />
            </div>

            <div className={styles.cardContent}>
              <h3>WhatsApp</h3>

              <p>
                +91 99049 01848
              </p>

              <span className={styles.cardMeta}>
                Vikram Mishra · Head Coach
              </span>
            </div>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;