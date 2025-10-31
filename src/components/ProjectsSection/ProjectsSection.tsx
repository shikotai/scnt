import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsSection.css";
import { useLang } from "../../lang/LanguageContext"; // ⬅️ add this import

const ProjectsSection: React.FC = () => {
  const { t } = useLang(); // ⬅️ access translations

  return (
    <section className="projects-section">
      <h2 className="projects-title">{t("projectsSection.title")}</h2>

      {/* ✅ Whole card is a link */}
      <Link to="/projects/br28713383" className="project-card">
        <img
          src="/images/project1/project-carbon.jpeg"
          alt={t("projectsSection.project1.alt")}
          className="project-image"
        />
        <div className="project-content">
          <p className="project-description">
            {t("projectsSection.project1.description")}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
