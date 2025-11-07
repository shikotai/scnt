import React from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./Projects.css";
import { useLang } from "../../lang/context/LanguageContext"; // ⬅️ import translator

const ProjectsList: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="page-wrapper">
      <NavigationHeader />

      <main className="projects-container">
        <section className="project-section">
          <div className="project-card">
            <img
              src="/images/project1/project-carbon.jpeg"
              alt={t("projectsList.project1.alt")}
              className="project-image"
            />
            <div className="project-info">
              <Link to="/projects/br28713383" className="project-title-link">
                <h2>{t("projectsList.project1.title")}</h2>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsList;
