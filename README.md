# Natali Show

Profesionalni Podcasti & Video Izveštaji

## Opis projekta

Ova aplikacija je React-based veb sajt za podcast i video izveštaje sa sledećim karakteristikama:

- Dvosječna podrška (srpski i nemački jezik)
- Responsivni dizajn za sve uređaje
- Admin panel za upravljanje sadržajem
- Povezivanje sa YouTube, Instagram i TikTok nalozima
- Kontakt forma za komunikaciju

## Tehnologije

- React
- React Router
- CSS3
- Vite (za build)

## Instalacija

1. Klonirajte repozitorijum
2. Instalirajte zavisnosti:
   ```
   npm install
   ```
3. Pokrenite aplikaciju:
   ```
   npm start
   ```

## Struktura projekta

```
src/
├── components/     # Reusable komponente
├── pages/          # Stranice aplikacije
├── contexts/       # React konteksti
├── services/       # Servisne funkcije
├── locales/        # Lokalizacija
├── assets/         # Slike i drugi asseti
├── utils/          # Pomoćne funkcije
├── App.jsx         # Glavna aplikacija komponenta
├── main.jsx        # Ulazna tačka aplikacije
└── App.css         # Glavni CSS fajl
```

## Funkcionalnosti

### Jezik

- Aplikacija automatski detektuje jezik na osnovu lokacije korisnika
- Korisnici mogu ručno da promene jezik klikom na dugme u headeru

### Admin panel

- Omogućava dodavanje sadržaja na oba jezika (srpski i nemački)
- Podržava različite tipove sadržaja:
  - Epizode podcasta
  - Video sadržaj
  - Priče

### Responsivnost

- Aplikacija je prilagođena za sve uređaje (desktop, tablet, mobilni)

### Kontakt

- Forma za slanje poruka
- Prikaz kontakt informacija
- Linkovi ka društvenim mrežama

## Razvoj

Za razvoj aplikacije koristi se Vite kao build alat. Glavne komponente su organizovane u direktorijumu [src/components](file:///e:/SHOW/src/components), a stranice u [src/pages](file:///e:/SHOW/src/pages).

## Potrebne dodatne biblioteke

Aplikacija koristi sledeće zavisnosti:

- react
- react-dom
- react-router-dom
- @vitejs/plugin-react (dev)
- vite (dev)

## Napomene

Ova aplikacija je dizajnirana da bude laka za korišćenje i održavanje, sa jasnom strukturom i podrškom za više jezika.