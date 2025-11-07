import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./NewsCarousel.css";
import { useLang } from "../../lang/context/LanguageContext"; // ⬅️ import the hook

const NewsCarousel: React.FC = () => {
  const { t } = useLang(); // ⬅️ access translator

  return (
    <section className="news-section">
      <h2 className="news-title">{t("newsCarousel.title")}</h2>

      <Carousel className="news-carousel" indicators={false}>
        <Carousel.Item>
          <Link to="/news/japan-news" className="news-link">
            <div className="news-card">
              <img
                src="/images/news/japan-collab.png"
                alt={t("newsCarousel.items.japanCollab.title")}
                className="news-image"
              />
              <div className="news-content">
                <h3 className="news-heading">
                  {t("newsCarousel.items.japanCollab.title")}
                </h3>
                <p className="news-date">
                  {t("newsCarousel.items.japanCollab.date")}
                </p>
                <p className="news-description">
                  {t("newsCarousel.items.japanCollab.description")}
                </p>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default NewsCarousel;
