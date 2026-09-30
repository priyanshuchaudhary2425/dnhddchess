import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.decorTop} aria-hidden="true" />
      <div className={styles.decorBottom} aria-hidden="true" />

      <div className={styles.container}>

        {/* Section label */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span>ABOUT THE CLUB</span>
        </div>

        {/* Main heading */}
        <h2 className={styles.title}>
          <span className={styles.green}>More Than</span>
          <span className={styles.red}>A Game.</span>
        </h2>

        {/* Introduction */}
        <div className={styles.intro}>
          <p>
            DNH &amp; DD Chess is a chess club bringing players and chess
            enthusiasts together across Dadra &amp; Nagar Haveli and
            Daman &amp; Diu.
          </p>

          <p>
            From casual games to competitive tournaments, the club is
            about playing chess, meeting people, and building a stronger
            chess community.
          </p>
        </div>

        {/* Club highlights */}
        <div className={styles.highlights}>

          <article className={styles.highlight}>
            <div className={styles.meta}>
              <span>01</span>
              <span className={styles.metaLine} />
            </div>

            <h3>Community</h3>

            <p>
              Players coming together
              <br />
              around the game.
            </p>
          </article>

          <article className={styles.highlight}>
            <div className={styles.meta}>
              <span>02</span>
              <span className={styles.metaLine} />
            </div>

            <h3>Tournaments</h3>

            <p>
              Local competitions
              <br />
              and chess events.
            </p>
          </article>

          <article className={styles.highlight}>
            <div className={styles.meta}>
              <span>03</span>
              <span className={styles.metaLine} />
            </div>

            <h3>Players</h3>

            <p>
              A growing community
              <br />
              of chess players.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default About;