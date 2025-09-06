import React from "react";
import { Card, CardContent } from "/src/components/ui/card.jsx";
import { Button } from '/src/components/ui/button.jsx';
import {
  Monitor,
  TrendingUp,
  Camera,
  Building,
  Radio,
  ArrowRight
} from 'lucide-react';
import servicesData from '/src/data/NaaMgroupservisce.json';
import '/src/styles/ServicesSection.scss';

const iconMap = {
  Monitor,
  TrendingUp,
  Camera,
  Building,
  Radio
};

export default function ServicesSection({ language = "EN" }) {
  const lang = language;

  const services = servicesData[lang];

  return (
    <section className="services-section">
      <div className="container">

        <div className="section-title">
          <h2>{lang === "EN" ? "Our Services" : "எங்கள் சேவைகள்"}</h2>
          <p>
            {lang === "EN"
              ? "NaaM Group delivers comprehensive solutions across multiple industries, providing expert services tailored to your business needs."
              : "நம் குழு பல துறைகளில் விரிவான தீர்வுகளை வழங்குகிறது, உங்கள் வணிக தேவைகளுக்கேற்ப நிபுணத்துவ சேவைகள்."}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.title}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="card-content">
                  <div className="icon-container">
                    <Icon />
                  </div>

                  <h3 className="card-title">{service.title}</h3>

                  <p className="card-description">{service.description}</p>

                  <div className="features">
                    {service.features.map((feature) => (
                      <div key={feature} className="feature">
                        <span className="dot" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="learn-more-btn">
                    {lang === "EN" ? "Learn More" : "மேலும் அறிய"}
                    <ArrowRight />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
