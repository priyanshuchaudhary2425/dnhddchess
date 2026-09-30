import styles from "./Footer.module.css";

import { FiMapPin, FiMail } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Decorative elements */}
      <div className={styles.decorTop} aria-hidden="true" />
      <div className={styles.decorBottom} aria-hidden="true" />

      <div className={styles.container}>

        {/* =========================================
            TOP DIVIDER
        ========================================= */}

        <div className={styles.topDivider}>
          <span />
          <span className={styles.star}>✦</span>
          <span />
        </div>


        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className={styles.footerGrid}>

          {/* BRAND */}

          <div className={styles.brand}>
            <h2>
              <span>DNH &amp; DD</span>
              <span>Chess</span>
            </h2>

            <p className={styles.region}>
              DADRA &amp; NAGAR HAVELI
              <br />
              AND DAMAN &amp; DIU
            </p>

            <div className={styles.goldLine} />

            <p className={styles.tagline}>
              Play. Learn. Repeat.
            </p>
          </div>


          {/* QUICK LINKS */}

          <div className={styles.column}>
            <h3>QUICK LINKS</h3>

            <nav className={styles.links}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>


          {/* CONTACT */}

          <div className={styles.column}>
            <h3>CONTACT</h3>

            <div className={styles.contactList}>

              <div className={styles.contactItem}>
                <FiMapPin />

                <p>
                  Dadra &amp; Nagar Haveli and
                  <br />
                  Daman &amp; Diu, India
                </p>
              </div>

              <a
                href="mailto:dnheddchess@gmail.com"
                className={styles.contactItem}
              >
                <FiMail />

                <p>
                  dnheddchess@gmail.com
                </p>
              </a>

            </div>
          </div>


          {/* SOCIAL */}

          <div className={styles.column}>
            <h3>CONNECT</h3>

            <div className={styles.socials}>

              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919904901848"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className={styles.bottom}>

          <p>
            © {new Date().getFullYear()} DNH &amp; DD Chess.
            All rights reserved.
          </p>

          <div className={styles.bottomTagline}>
            <span>Play. Learn. Repeat.</span>
            <i />
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;