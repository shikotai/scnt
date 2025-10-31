import React from "react";
import { Link } from "react-router-dom";
import "./HomeHero.css";
import sdsImage from "../../assets/sds.jpg";
import { useLang } from "../../lang/LanguageContext"; // ⬅️ import the language context

const HomeHero: React.FC = () => {
  const { t } = useLang(); // ⬅️ access the translator

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">{t("homeHero.title")}</h1>

          <p className="hero-description">{t("homeHero.description")}</p>

          <Link to="/about" className="hero-button">
            {t("homeHero.button")}
          </Link>
        </div>

        <div className="hero-image">
          <img src={sdsImage} alt="Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
