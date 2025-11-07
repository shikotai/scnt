import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationHeader.css";
import logo from "../../assets/logo.png";

// ✅ Import LanguageContext hook
import { useLang } from "../../lang/context/LanguageContext";

const NavigationHeader: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (newLang: "ru" | "en" | "kk") => {
    if (newLang !== lang) setLang(newLang);
    setMenuOpen(false);
  };

  return (
    <header className="navigation-header">
      <div className="header-container">
        {/* ✅ Logo */}
        <div className="logo-section">
          <img src={logo} alt="Scientific Center Logo" className="logo" />
          <div className="logo-text">
            <span className="title">Scientific</span>
            <span className="title">Center for</span>
            <span className="title">New</span>
            <span className="title">Technologies</span>
          </div>
        </div>

        {/* ✅ Hamburger Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={t("aria.toggleNavigation") as string} // ✅ fixed type error
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ✅ Navigation Menu */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            {t("nav.home") as string}
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            {t("nav.about") as string}
          </NavLink>
          <NavLink to="/news" onClick={() => setMenuOpen(false)}>
            {t("nav.news") as string}
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            {t("nav.projects") as string}
          </NavLink>

          {/* ✅ Language Switcher */}
          <div className="lang-toggle">
            <button
              onClick={() => changeLang("ru")}
              className={`lang-btn ${lang === "ru" ? "active" : ""}`}
              title={t("lang.ru") as string}
            >
              <span className="fi fi-ru"></span>
            </button>

            <button
              onClick={() => changeLang("en")}
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              title={t("lang.en") as string}
            >
              <span className="fi fi-us"></span>
            </button>

            <button
              onClick={() => changeLang("kk")}
              className={`lang-btn ${lang === "kk" ? "active" : ""}`}
              title={t("lang.kk") as string}
            >
              <span className="fi fi-kz"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
