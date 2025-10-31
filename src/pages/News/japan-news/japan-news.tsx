import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./japan-news.css";
import { useLang } from "../../../lang/LanguageContext";

const JapanNews: React.FC = () => {
  const { t } = useLang();

  // helpers for cleaner code
  const collabItems = (t(
  "japanNews.sections.results.list.collaboration.items"
  ) as unknown as any[]) ?? [];

  const techItems = (t(
  "japanNews.sections.results.list.technicalInfo.items"
  ) as unknown as any[]) ?? [];

  const intlItems = (t(
  "japanNews.sections.results.list.international.items"
  ) as unknown as any[]) ?? [];

  const expoItems = (t(
  "japanNews.sections.results.list.exhibition.items"
  ) as unknown as any[]) ?? [];


  return (
    <div className="news-page">
      <NavigationHeader />

      {/* Title */}
      <section className="news-section title-drop">
        <h2>{t("japanNews.title")}</h2>
      </section>

      {/* Sophia University */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div
            className="news-image1"
            style={{
              backgroundImage: `url('/images/news/japan-news/uni.png')`,
            }}
          ></div>
          <div className="news-content">
            <h3>{t("japanNews.sections.sophiaUniversity.title")}</h3>
            <p>{t("japanNews.sections.sophiaUniversity.paragraph1")}</p>
            <p>{t("japanNews.sections.sophiaUniversity.paragraph2.intro")}</p>
              <ul>
                <li>
                  {t(
                    "japanNews.sections.sophiaUniversity.paragraph2.list.reputation"
                  )}
                </li>
                <li>
                  {t(
                    "japanNews.sections.sophiaUniversity.paragraph2.list.programs"
                  )}
                </li>
                <li>
                  {t(
                    "japanNews.sections.sophiaUniversity.paragraph2.list.campuses"
                  )}
                </li>
              </ul>
            <p>{t("japanNews.sections.sophiaUniversity.paragraph2.closing")}</p>
          </div>
        </div>
      </section>

      {/* Meeting with Professor Okada */}
      <section className="news-section lightblue-isle">
        <h2>{t("japanNews.sections.meetingOkada.title")}</h2>
        <div className="news-inner">
          <div className="news-content">
            <p>{t("japanNews.sections.meetingOkada.paragraphs.p1")}</p>
            <p>{t("japanNews.sections.meetingOkada.paragraphs.p2")}</p>
            <p>{t("japanNews.sections.meetingOkada.paragraphs.p3")}</p>
          </div>
          <div
            className="news-image2"
            style={{
              backgroundImage: `url('/images/news/japan-news/meeting.jpg')`,
            }}
          ></div>
        </div>
      </section>

      {/* Meeting with Sakaida / COMNEXT */}
      <section className="news-section white-isle">
        <h2>{t("japanNews.sections.meetingSakaida.title")}</h2>
        <div className="news-inner">
          <div className="news-images-column">
            <div
              className="news-image3"
              style={{
                backgroundImage: `url('/images/news/japan-news/discussion.jpg')`,
              }}
            ></div>
            <div
              className="news-image4"
              style={{
                backgroundImage: `url('/images/news/japan-news/comnext.png')`,
              }}
            ></div>
          </div>
          <div className="news-content">
            <p>{t("japanNews.sections.meetingSakaida.paragraphs.p1")}</p>
            <p>{t("japanNews.sections.meetingSakaida.paragraphs.p2")}</p>
          </div>
        </div>
      </section>

      {/* Final meeting */}
      <section className="news-section lightblue-isle">
        <h2>{t("japanNews.sections.finalMeeting.title")}</h2>
        <div className="news-inner">
          <div className="news-content">
            <p>{t("japanNews.sections.finalMeeting.paragraph")}</p>
          </div>
        </div>
      </section>

      {/* Visits */}
      <section className="news-section white-isle">
        <h2>{t("japanNews.sections.visits.title")}</h2>
        <div className="news-inner">
          <div className="news-content">
            <p>{t("japanNews.sections.visits.paragraph")}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="news-section lightblue-isle">
        <h2>{t("japanNews.sections.results.title")}</h2>
        <div className="news-inner">
          <div className="news-content">
            <ol>
              {/* Collaboration */}
              <li>
                <strong>
                  {t("japanNews.sections.results.list.collaboration.title")}
                </strong>
                <ul>
                  {collabItems?.map((item, i) => (
                    <li key={`collab-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>

              {/* Technical Info */}
              <li>
                <strong>
                  {t("japanNews.sections.results.list.technicalInfo.title")}
                </strong>
                <ul>
                  {techItems?.map((item, i) => (
                    <li key={`tech-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>

              {/* International */}
              <li>
                <strong>
                  {t("japanNews.sections.results.list.international.title")}
                </strong>
                <ul>
                  {intlItems?.map((item, i) => (
                    <li key={`intl-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>

              {/* Exhibition */}
              <li>
                <strong>
                  {t("japanNews.sections.results.list.exhibition.title")}
                </strong>
                <ul>
                  {expoItems?.map((item, i) => (
                    <li key={`expo-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JapanNews;
