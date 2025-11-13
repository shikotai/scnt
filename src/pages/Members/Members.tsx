import React from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./Members.css";
import { useLang } from "../../lang/context/LanguageContext";

const Members: React.FC = () => {
  const { t } = useLang();

  const members = [
    {
      name: t("ualis.name"),
      position: t("ualis.position"),
      image: "/images/members/ualis.png",
      link: "/members/uali-shynybek",
    },
    {
      name: t("placeholder"),
      position: t("placholder"),
      image: "/images/members/placeholder1.jpg",
      link: "/members/placeholder",
    },
  ];

  return (
    <div className="members-page">
      <NavigationHeader />

      <section className="about-section members-section">
        <h2>{t("members.title")}</h2>

        <div className="members-grid">
          {members.map((person, index) => (
            <Link to={person.link} className="members-card" key={index}>
              <div
                className="members-photo"
                style={{ backgroundImage: `url(${person.image})` }}
              ></div>
              <h3 className="members-name">{person.name}</h3>
              <p className="members-position">{person.position}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;