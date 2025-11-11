import React from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./Members.css";
import { useLang } from "../../lang/context/LanguageContext";

const Members: React.FC = () => {
  const { t } = useLang();

  const member = {
    name: t("members.items.ualis.name"),
    position: t("members.items.ualis.position"),
    image: "/images/members/ualis.png",
    link: "/members/uali-shynybek", // ✅ new link
  };

  return (
    <div className="members-page">
      <NavigationHeader />

      <section className="about-section members-section">
        <h2>{t("members.title")}</h2>

        <div className="members-grid">
          {/* Wrap the whole card in Link */}
          <Link to={member.link} className="members-card">
            <div
              className="members-photo"
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
            <h3 className="members-name">{member.name}</h3>
            <p className="members-position">{member.position}</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;
