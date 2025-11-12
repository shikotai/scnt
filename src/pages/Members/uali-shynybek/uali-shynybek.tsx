import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./uali-shynybek.css";

const UaliShynybek: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/ualis.png)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("ualis.name")}</h2>
            <p className="profile-position">{t("ualis.position")}</p>
            <p className="profile-degree">{t("ualis.degree")}</p>
            <p className="profile-role">{t("ualis.role")}</p>
            <p className="profile-affiliation">{t("ualis.affiliation")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("ualis.email")}`}>
                {t("members.ualis.email")}
              </a>
            </p>
            <p className="profile-index">
              H-index:{" "}
              <span className="highlight">{t("ualis.hindex")}</span>
            </p>

            <div className="profile-links">
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/icons/scopus.png" alt="Scopus" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/icons/orcid.png" alt="ORCID" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/icons/scholar.png" alt="Google Scholar" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/icons/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-tabs">
          <button className="active">{t("ualis.tabs.bio")}</button>
          <button>{t("ualis.tabs.projects")}</button>
          <button>{t("ualis.tabs.publications")}</button>
        </div>

        <div className="profile-content">
          <h3>{t("ualis.bioTitle")}</h3>
          <p>{t("ualis.bioText")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UaliShynybek;
