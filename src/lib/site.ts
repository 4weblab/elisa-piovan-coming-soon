export const SITE_URL = "https://elitrainer.it";

export const WHATSAPP_URL =
  "https://wa.me/393278840255?text=Ciao%20Elisa,%20vorrei%20informazioni%20sui%20percorsi%20di%20coaching";

export const INSTAGRAM_URL = "https://www.instagram.com/elisapiovan.ep/";

export const TIKTOK_URL = "https://www.tiktok.com/@elisapiovan.ep";

export const FOURWEBLAB_URL = "https://4weblab.it";

export const FOURWEBLAB_WHATSAPP_URL =
  "https://wa.me/393514656042?text=Ciao%20Carlo,%20ho%20visto%20il%20case%20study%20di%20Elisa%20Piovan%20Trainer%20e%20vorrei%20informazioni%20sui%20servizi%20di%204%20Web%20Lab";

export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJYa_I7NE3f44RMnD1cAMlpmg";

export const GOOGLE_RATING_VALUE = "4.9";
export const GOOGLE_REVIEW_COUNT = 15;

export const ORGANIZATION_JSON_LD = {
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Elisa Piovan Trainer",
  alternateName: ["EP Team", "Elitrainer"],
  url: `${SITE_URL}/`,
  telephone: "+393278840255",
  areaServed: [
    { "@type": "City", name: "Noventa Padovana" },
    { "@type": "City", name: "Vigonza" },
    { "@type": "City", name: "Padova" },
    { "@type": "Country", name: "Italia" },
  ],
  sameAs: [INSTAGRAM_URL, TIKTOK_URL, GOOGLE_BUSINESS_URL],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+393278840255",
    contactType: "customer service",
    availableLanguage: "Italian",
  },
};
