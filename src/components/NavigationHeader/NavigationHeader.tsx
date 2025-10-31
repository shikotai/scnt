import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationHeader.css";
import logo from "../../assets/logo.png";
import { useLang } from "../../lang/LanguageContext";

const NavigationHeader: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navigation-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="Scientific Center Logo" className="logo" />
          <div className="logo-text">
            <span className="title">Scientific</span>
            <span className="title">Center for</span>
            <span className="title">New</span>
            <span className="title">Technologies</span>
          </div>
        </div>

        {/* ✅ Hamburger button (was missing) */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        {/* ✅ use "show" because CSS expects .nav-menu.show */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/news" onClick={() => setMenuOpen(false)}>
            {t("nav.news")}
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            {t("nav.projects")}
          </NavLink>

          {/* Language Buttons */}
          <div className="lang-toggle">
            <button
              onClick={() => setLang("ru")}
              className={lang === "ru" ? "lang-btn active" : "lang-btn"}
            >
              🇷🇺
            </button>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "lang-btn active" : "lang-btn"}
            >
              🇬🇧
            </button>
            <button
              onClick={() => setLang("kk")}
              className={lang === "kk" ? "lang-btn active" : "lang-btn"}
            >
              🇰🇿
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
