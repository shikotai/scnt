import React from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./News.css";
import { Link } from "react-router-dom";
import { useLang } from "../../lang/LanguageContext";

const News: React.FC = () => {
  const { t } = useLang();

  const newsData = [
    {
      title: t("newsPage.items.japanCollab.title"),
      description: t("newsPage.items.japanCollab.description"),
      image: "/images/news/japan-collab.jpg",
      date: t("newsPage.items.japanCollab.date"),
      link: "/news/japan-news",
      button: t("newsPage.items.japanCollab.button"),
    },
  ];

  return (
    <>
      <NavigationHeader />

      <section className="news-section">
        <h2 className="news-title">{t("newsPage.title")}</h2>

        <div className="news-container">
          {newsData.map((news, index) => (
            <div key={index} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>

              <div className="news-text">
                <h3>{news.title}</h3>
                <p className="news-date">{news.date}</p>
                <p>{news.description}</p>

                <Link to={news.link} className="news-button">
                  {news.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;
