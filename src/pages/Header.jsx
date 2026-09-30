import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ---------------------------------------------------------
     Highlight the section currently in view
     --------------------------------------------------------- */
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let current = "home";

      NAV_ITEMS.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  /* ---------------------------------------------------------
     While the mobile menu is open:
     - lock page scroll
     - close on Escape
     --------------------------------------------------------- */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  /* ---------------------------------------------------------
     Close the mobile menu if the screen grows to desktop size
     --------------------------------------------------------- */
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 48.0625rem)");

    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", handleChange);

    return () => desktopQuery.removeEventListener("change", handleChange);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* BRAND */}

        <a
          href="#home"
          className={styles.brand}
          onClick={() => handleNavigation("home")}
        >
          <img
            src={logo}
            alt="DNH & DD Chess Association"
            className={styles.logo}
          />

          <div className={styles.brandText}>
            <span className={styles.brandName}>DNH & DD</span>

            <span className={styles.brandSubtitle}>CHESS ASSOCIATION</span>
          </div>
        </a>

        {/* DESKTOP NAV */}

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navLink} ${
                activeSection === id ? styles.active : ""
              }`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => handleNavigation(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON (three lines → X) */}

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuOpen : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {NAV_ITEMS.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.mobileLink} ${
                activeSection === id ? styles.mobileActive : ""
              }`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => handleNavigation(id)}
            >
              <span className={styles.mobileNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.mobileBottom}>
          <span>DNH & DD</span>
          <span>CHESS ASSOCIATION</span>
        </div>
      </div>
    </header>
  );
}

export default Header;