import styles from "./Hero.module.css";
import desktopBg from "../assets/herobg.png";
import mobileBg from "../assets/herobg-mobile.png";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background artwork */}
      <div
        className={styles.background}
        style={{
          "--desktop-bg": `url("${desktopBg}")`,
          "--mobile-bg": `url("${mobileBg}")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.green}>Play.</span>
            <span className={styles.red}>Learn.</span>
            <span className={styles.green}>Repeat.</span>
          </h1>

          {/* {" "} keeps the space between "across" and "Dadra" when the
              desktop line break is hidden on mobile */}
          <p className={styles.description}>
            Building a stronger chess community across{" "}
            <br className={styles.desktopBreak} />
            Dadra and Nagar Haveli and Daman and Diu.
          </p>

          <div className={styles.coach}>
            <span className={styles.coachRule} aria-hidden="true" />

            <div className={styles.coachDetails}>
              <p className={styles.coachName}>Vikram Mishra</p>
              <span className={styles.coachRole}>HEAD COACH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;