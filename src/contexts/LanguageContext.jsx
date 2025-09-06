import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  sr: {
    home: "Početna",
    podcast: "Podcast",
    videos: "Video Izveštaji",
    kitchen: "Kuhinja sa Gostima",
    stories: "Priče",
    contact: "Kontakt",
    heroTitle: "Profesionalni Podcasti & Video Izveštaji",
    heroSubtitle: "Autentične priče, duboke analize i kvalitetni sadržaj koji povezuje dijasporu sa Balkanom",
    watchLatest: "Pogledaj Najnoviji Podcast",
    reports: "Podcast & Izveštaji",
    reportsDesc: "Kvalitetni sadržaj koji spaja investigativno novinarstvo sa autentičnim pričama iz naše zajednice",
    latestEpisode: "Najnovija Epizoda",
    allEpisodes: "Pogledaj Sve Epizode",
    videoReports: "Video Izveštaji",
    celebrations: "Romska Veselja",
    celebrationsDesc: "Dokumentujemo najlepše trenutke naše zajednice - od tradicionalnih slavlja do modernih celebracija",
    allCelebrations: "Pogledaj Sve Slavlja",
    kitchenShow: "Kuhinja sa Gostima",
    kitchenDesc: "Jedinstveni talk show format gde se najvažnije priče pričaju za trpezarijskim stolom, kombinujući autentičnost domaće atmosfere sa profesionalnim novinarstvom",
    quote: "Najbolje priče se pričaju za stolom, uz dobru hranu i iskrenu reč.",
    politicians: "Političari",
    politiciansDesc: "Razgovori sa značajnim političkim ličnostima o važnim temama",
    artists: "Umetnici",
    artistsDesc: "Kreativne duše koje oblikuju našu kulturu i umetnost",
    academics: "Akademici",
    academicsDesc: "Naučnici i istraživači koji proširuju granice znanja",
    diaspora: "Dijaspora & Balkan",
    diasporaDesc: "Povezujemo srca koja kucaju na dva kontinenta - priče o identitetu, ljubavi prema domovini i gradnji mostova između kultura",
    featured: "Istaknut Sadržaj",
    featuredDesc: "Tri Generacije, Jedna Priča",
    featuredSub: "Pratite emotivno putovanje familije Jovanović kroz tri generacije - od prvih koraka u Nemačkoj 80-ih, preko borbe za integraciju 90-ih, do današnje uspešne priče njihove dece koja grade mostove između dvije domovine.",
    viewDocumentary: "Pogledaj Ceo Dokumentarac",
    allStories: "Istražuj Sve Priče",
    contactTitle: "Kontakt",
    contactDesc: "Stupite u kontakt sa nama za saradnju, predloge ili jednostavno da podelite svoju priču",
    yourName: "Vaše ime",
    email: "Email adresa",
    message: "Vaša poruka",
    sendMessage: "Pošaljite Poruku",
    directContact: "Direktan Kontakt",
    followUs: "Pratite Nas",
    subscribe: "Budite prvi koji će saznati za nove epizode i ekskluzivni sadržaj!",
    rights: "Sva prava zadržana",
    phone: "+49 (0) 123 456 7890",
    emailContact: "kontakt@podcaststudio.rs"
  },
  de: {
    home: "Startseite",
    podcast: "Podcast",
    videos: "Video Berichte",
    kitchen: "Küche mit Gästen",
    stories: "Geschichten",
    contact: "Kontakt",
    heroTitle: "Professionelle Podcasts & Videoberichte",
    heroSubtitle: "Authentische Geschichten, fundierte Analysen und qualitativ hochwertige Inhalte, die die Diaspora mit dem Balkan verbinden",
    watchLatest: "Neueste Folge ansehen",
    reports: "Podcast & Berichte",
    reportsDesc: "Hochwertige Inhalte, die investigativen Journalismus mit authentischen Geschichten aus unserer Gemeinschaft verbinden",
    latestEpisode: "Neueste Episode",
    allEpisodes: "Alle Episoden ansehen",
    videoReports: "Video Berichte",
    celebrations: "Roma Feste",
    celebrationsDesc: "Wir dokumentieren die schönsten Momente unserer Gemeinschaft - von traditionellen Feiern bis hin zu modernen Veranstaltungen",
    allCelebrations: "Alle Feste ansehen",
    kitchenShow: "Küche mit Gästen",
    kitchenDesc: "Ein einzigartiges Talkshow-Format, bei dem die wichtigsten Geschichten am Esstisch erzählt werden und Authentizität der heimischen Atmosphäre mit professionellem Journalismus verbunden wird",
    quote: "Die besten Geschichten werden am Tisch erzählt, mit gutem Essen und ehrlichen Worten.",
    politicians: "Politiker",
    politiciansDesc: "Gespräche mit wichtigen politischen Persönlichkeiten über wichtige Themen",
    artists: "Künstler",
    artistsDesc: "Kreative Seelen, die unsere Kultur und Kunst prägen",
    academics: "Akademiker",
    academicsDesc: "Wissenschaftler und Forscher, die die Grenzen des Wissens erweitern",
    diaspora: "Diaspora & Balkan",
    diasporaDesc: "Wir verbinden Herzen, die auf zwei Kontinenten schlagen - Geschichten über Identität, Heimatliebe und den Brückenbau zwischen Kulturen",
    featured: "Hervorgehobener Inhalt",
    featuredDesc: "Drei Generationen, eine Geschichte",
    featuredSub: "Verfolgen Sie die emotionale Reise der Familie Jovanović durch drei Generationen - von den ersten Schritten in Deutschland in den 80er Jahren über den Kampf um die Integration in den 90er Jahren bis hin zur heutigen Erfolgsgeschichte ihrer Kinder, die Brücken zwischen zwei Heimatländern bauen.",
    viewDocumentary: "Ganze Dokumentation ansehen",
    allStories: "Alle Geschichten erkunden",
    contactTitle: "Kontakt",
    contactDesc: "Kontaktieren Sie uns für Kooperationen, Vorschläge oder einfach, um Ihre Geschichte zu teilen",
    yourName: "Ihr Name",
    email: "E-Mail Adresse",
    message: "Ihre Nachricht",
    sendMessage: "Nachricht senden",
    directContact: "Direkter Kontakt",
    followUs: "Folgen Sie uns",
    subscribe: "Seien Sie der Erste, der über neue Episoden und exklusive Inhalte informiert wird!",
    rights: "Alle Rechte vorbehalten",
    phone: "+49 (0) 123 456 7890",
    emailContact: "kontakt@podcaststudio.rs"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('sr');

  useEffect(() => {
    // Detect language based on user's location/browser settings
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('de')) {
      setLanguage('de');
    } else {
      setLanguage('sr');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'sr' ? 'de' : 'sr');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};