import { Card, CardContent } from '/src/components/ui/card.jsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import contactInfo from '/src/data/contactInfo.json';
import '/src/styles/ContactSection.scss';

const iconMap = {
  MapPin,
  Phone,
  Mail,
  Clock
};

export default function ContactSection({ language = "EN" }) {
  return (
    <section className="contact-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="section-header text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "EN" ? "Get In Touch" : "தொடர்பு கொள்ள"}
          </h2>
          <p className="subtitle text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "EN" 
              ? "Ready to transform your business? Contact NaaM Group today and let's discuss how we can help you achieve your goals." 
              : "உங்கள் வணிகத்தை மாற்ற தயாரா? இன்று நம் குழுவை தொடர்பு கொண்டு உங்கள் இலக்குகளை எவ்வாறு அடையலாம் என்பதை விவாதிப்போம்."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <div className="info-section space-y-8">
            <h3 className="info-title text-3xl font-bold text-foreground mb-8">
              {language === "EN" ? "Let's Start a Conversation" : "ஒரு உரையாடலைத் தொடங்குவோம்"}
            </h3>

            <div className="info-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = iconMap[info.icon];
                return (
                  <Card
                    key={info.title.EN}
                    className="info-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="icon-wrapper mb-4 p-3 bg-gradient-primary rounded-full w-fit mx-auto">
                        {Icon && <Icon className="w-6 h-6 text-white" />}
                      </div>
                      <h4 className="card-title font-semibold text-foreground mb-2">
                        {info.title[language]}
                      </h4>
                      <p className="card-text text-muted-foreground text-sm">
                        {info.content[language]}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="form-wrapper border-0 shadow-elegant bg-gradient-card backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label block text-sm font-medium text-foreground mb-2">
                      {language === "EN" ? "First Name" : "முதல் பெயர்"}
                    </label>
                    <input
                      type="text"
                      placeholder={language === "EN" ? "John" : "ஜான்"}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label block text-sm font-medium text-foreground mb-2">
                      {language === "EN" ? "Last Name" : "இறுதி பெயர்"}
                    </label>
                    <input
                      type="text"
                      placeholder={language === "EN" ? "Doe" : "டோ"}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label block text-sm font-medium text-foreground mb-2">
                    {language === "EN" ? "Email" : "மின்னஞ்சல்"}
                  </label>
                  <input
                    type="email"
                    placeholder={language === "EN" ? "john.doe@example.com" : "john.doe@உதாரணம்.com"}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label block text-sm font-medium text-foreground mb-2">
                    {language === "EN" ? "Service Interest" : "சேவை ஆர்வம்"}
                  </label>
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>
                      {language === "EN" ? "Select a service" : "ஒரு சேவையைத் தேர்வுசெய்க"}
                    </option>
                    <option value="it-care">{language === "EN" ? "NaaM IT Care" : "நம் ஐடி கேர்"}</option>
                    <option value="digital-marketing">{language === "EN" ? "NaaM Digital Marketing" : "நம் டிஜிட்டல் மார்க்கெட்டிங்"}</option>
                    <option value="photoshop">{language === "EN" ? "NaaM Photoshop" : "நம் ஃபோட்டோஷாப்"}</option>
                    <option value="fm">{language === "EN" ? "NaaM FM" : "நம் எஃப்எம்"}</option>
                    <option value="rj">{language === "EN" ? "NaaM RJ" : "நம் ஆர்.ஜே"}</option>
                  </select>
                </div>

                <div>
                  <label className="form-label block text-sm font-medium text-foreground mb-2">
                    {language === "EN" ? "Message" : "செய்தி"}
                  </label>
                  <textarea
                    placeholder={language === "EN" ? "Tell us about your project or requirements..." : "உங்கள் திட்டம் அல்லது தேவைகள் பற்றி எங்களுக்கு கூறுங்கள்..."}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn w-full bg-gradient-primary text-white hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold shadow-elegant rounded-md"
                >
                  {language === "EN" ? "Send Message" : "செய்தியை அனுப்பு"}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
