import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./br28713383.css";
import { Link } from "react-router-dom";
import { useLang } from "../../../lang/LanguageContext";

const Br28713383: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="about-page">
      <NavigationHeader />

      {/* Название */}
      <section className="about-section company-section">
        <h2>{t("project_br28713383.title")}</h2>
      </section>

      {/* Цели программы */}
      <section className="about-section mission-section">
        <h2>{t("project_br28713383.sections.goals.title")}</h2>
        <div className="about-inner">
          <div
            className="about-image"
            style={{
              backgroundImage: `url('/images/project1/molstruct.jpg')`,
            }}
          ></div>
          <div className="about-content">
            <p>{t("project_br28713383.sections.goals.paragraph")}</p>
          </div>
        </div>
      </section>

      {/* Описание программы */}
      <section className="about-section team-section">
        <h2>{t("project_br28713383.sections.description.title")}</h2>
        <div className="about-inner">
          <div className="about-content">
            <p>{t("project_br28713383.sections.description.paragraphs.p1")}</p>
            <p>{t("project_br28713383.sections.description.paragraphs.p2")}</p>
          </div>
          <div
            className="about-image"
            style={{
              backgroundImage: `url('/images/project1/pollution.jpg')`,
            }}
          ></div>
        </div>
      </section>

      {/* Публикации */}
      <section className="about-section partners-section">
        <h2>{t("project_br28713383.sections.publications.title")}</h2>
        <div className="about-inner">
          <div className="project-content">
            <p>{t("project_br28713383.sections.publications.paragraph")}</p>

            <ul className="publication-list">
              <li>
                <a
                  href="/files/project1/processes-13-02722-v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_br28713383.sections.publications.list.paper1")}
                </a>
              </li>
              <li>
                <a
                  href="/files/project1/Acceptance-Certificate-processes-3788544.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_br28713383.sections.publications.list.paper2")}
                </a>
              </li>
              <li>
                <a
                  href="/files/project1/academic-journal-physical-chemical-sciences-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_br28713383.sections.publications.list.paper3")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Назад */}
      <div className="back-button-wrapper">
        <Link to="/projects" className="back-button">
          {t("project_br28713383.backButton")}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Br28713383;
