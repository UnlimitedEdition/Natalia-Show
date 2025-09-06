// Mock service for content management
// In a real application, this would connect to a backend API

class ContentService {
  // Get content by type and language
  static getContent(type, language) {
    // This would normally fetch from an API
    // For now, we'll return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const content = {
          episodes: [
            {
              id: 1,
              title: {
                sr: "Dijaspora u Nemačkoj: Priče o Integraciji i Tradiciji",
                de: "Diaspora in Deutschland: Geschichten über Integration und Tradition"
              },
              description: {
                sr: "U ovoj epizodi razgovaramo sa uspešnim predstavnicima romske zajednice iz Nemačke o izazovima integracije, očuvanju kulturnog identiteta i mostovima koje grade između svoje nove domovine i Balkana.",
                de: "In dieser Folge sprechen wir mit erfolgreichen Vertretern der Roma-Gemeinschaft in Deutschland über die Herausforderungen der Integration, die Bewahrung der kulturellen Identität und die Brücken, die sie zwischen ihrem neuen Zuhause und dem Balkan bauen."
              },
              duration: "45 min",
              views: "12,453 pregleda",
              url: "#"
            }
          ],
          videos: [
            {
              id: 1,
              title: {
                sr: "Đurđevdan 2024",
                de: "Pfingsten 2024"
              },
              description: {
                sr: "Najveće romsko slavlje u Nemačkoj sa preko 2000 učesnika",
                de: "Das größte Roma-Fest in Deutschland mit über 2000 Teilnehmern"
              },
              views: "25,000",
              duration: "2h 15min",
              url: "#"
            },
            {
              id: 2,
              title: {
                sr: "Svadba Veka",
                de: "Hochzeit des Jahrhunderts"
              },
              description: {
                sr: "Tradicionalna romska svadba koja je okupila tri generacije",
                de: "Traditionelle Roma-Hochzeit, die drei Generationen zusammengebracht hat"
              },
              views: "18,500",
              duration: "1h 45min",
              url: "#"
            }
          ]
        };
        
        resolve(content[type] || []);
      }, 300);
    });
  }

  // Save content (for admin panel)
  static saveContent(content) {
    // This would normally send data to an API
    console.log('Saving content:', content);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Content saved successfully' });
      }, 500);
    });
  }
}

export default ContentService;