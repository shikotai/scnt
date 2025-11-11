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
            <h2 className="profile-name">{t("members.items.ualis.name")}</h2>
            <p className="profile-position">{t("members.items.ualis.position")}</p>
            <p className="profile-degree">Студент</p>
            <p className="profile-role">Программист</p>
            <p className="profile-affiliation">
              Scientific Center for New Technologies
            </p>
            <p className="profile-email">
              Email:{" "}
              <a href="mailto:ualishynybek@scnt.kz">ualishynybek@gmail.com</a>
            </p>
            <p className="profile-index">
              H-index: <span className="highlight">one day i'll have one</span>
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
          <button className="active">Биография</button>
          <button className="active">Научные проекты</button>
          <button className="active">Публикации</button>
        </div>

        <div className="profile-content">
          <h3>Профессиональная биография</h3>
          <p>
            Представьте типо дофига наработал
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UaliShynybek;
