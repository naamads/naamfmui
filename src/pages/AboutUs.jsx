import React from "react";
import { Link } from "react-router-dom";   // Breadcrumb navigation
import "../styles/aboutUs.scss";
import { Home } from "lucide-react";      // Breadcrumb Icon
import aboutImg from "../assests/abouts.jpg";

// Translation data
const translations = {
  EN: {
    breadcrumb: "About Us",
    header: "About Us",
    whoWeAreTitle: "Who We Are",
    whoWeAreText: `We are a passionate music band dedicated to bringing energy, rhythm,
    and joy to our audience. Our journey started with a simple love for melodies and has now
    grown into a mission to inspire people through music.`,
    missionTitle: "Our Mission",
    missionText: `To create unforgettable musical experiences that connect hearts, cultures,
    and generations. From live shows to creative productions, we aim to spread positivity through every note.`
  },
  TN: {
    breadcrumb: "எங்களை பற்றி",
    header: "எங்களை பற்றி",
    whoWeAreTitle: "நாங்கள் யார்",
    whoWeAreText: `நாங்கள் ஒரு இசை குழுமமாகும், எங்கள் ரசிகர்களுக்கு ஆற்றல், தாளம்,
    மற்றும் மகிழ்ச்சியை வழங்க உறுதியானவர். எங்கள் பயணம் ஒரு சின்ன இசை காதலுடன் தொடங்கி,
    தற்போது மக்கள் மனங்களை இசையின் மூலம் இணைக்க ஒரு திட்டமாக வளர்ந்துள்ளது.`,
    missionTitle: "எங்கள் நோக்கம்",
    missionText: `மனங்களை, பண்பாடுகளை மற்றும் தலைமுறைகளை இணைக்கும் மறக்க முடியாத
    இசை அனுபவங்களை உருவாக்குவது. நேரடி நிகழ்ச்சிகளிலிருந்து படைப்பாற்றல் தயாரிப்புகள் வரை,
    ஒவ்வொரு நோட்டிலும் நாங்கள் நேர்மறையை பரப்புகிறோம்.`
  }
};

const AboutUs = ({ language = "EN" }) => {
  const t = translations[language] || translations.EN;

  return (
    <section className="about">
      {/* Page Header / Breadcrumb */}
      <div className="about__header">
        <div className="container">
          <div className="about__title">
            <Home size={20} />
            <span>
              <Link to="/">{language === "EN" ? "Home" : "முகப்பு"}</Link> &gt; {t.breadcrumb}
            </span>
            <h1>{t.header}</h1>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="about__image">
        <img src={aboutImg} alt={t.header} />
      </div>

      {/* About Us Content */}
      <div className="about__content container">
        <h2>{t.whoWeAreTitle}</h2>
        <p>{t.whoWeAreText}</p>

        <h2>{t.missionTitle}</h2>
        <p>{t.missionText}</p>
      </div>
    </section>
  );
};

export default AboutUs;
