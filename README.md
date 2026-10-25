# Luxury Indian Wedding Invitation Website

A luxury, interactive, production-ready Indian Wedding Invitation website built with **React**, **Vite**, **Framer Motion**, and custom **CSS**.

Designed specifically for the sacred union of **Chi. La. Sow. Mohana Priya** and **Chi. Likhith Varma**.

---

## 🌟 Key Features

* **Traditional Indian Invitation Cover Opening**: Auspicious Ganesha / Om invocation, traditional gold borders, and smooth unlock animation.
* **Luxury Card Visual Aesthetics**: Paper texture styling, antique gold foil typography, marigold garlands, and mandap motifs.
* **Single Source of Truth (`src/data/weddingData.js`)**: All wedding information is central and easily editable.
* **Family Blessings Section**: Dedicated section for Bride's and Groom's parents with location details.
* **Sumuhurtham & Events**: Precise Telugu wedding timings (Arudhra Nakshatram & Vrishaba Lagnam) with one-click **Save Date to Calendar (.ics)** download.
* **Live Real-time Countdown Timer**: Real-time counter to Saturday, 5th September 2026, 11:05 p.m.
* **Venue & Interactive Google Maps**: Full address details with embedded Google Map, "Get Directions", and "View on Map" integration.
* **Our Moments Gallery & Lightbox**: Image gallery with gold frames and click-to-expand lightbox preview.
* **RSVP Form & WhatsApp Integration**: Native attendance form + instant direct WhatsApp RSVP pre-filled message generator.
* **Share Invitation**: Web Share API trigger with fallback link copy alert.
* **Ambient Audio Controller**: Floating sound control with Shehnai audio playback and Web Audio API synthesizer fallback.
* **Emotional Deep Maroon Closing Cover**: Traditional deep maroon background with glowing gold foil text signature.

---

## 🚀 Quick Start Guide

### 1. Installation

```bash
npm install
```

### 2. Run Locally in VS Code

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

### 3. Build for Production

```bash
npm run build
```

---

## 🛠️ How to Customize Wedding Data

All customizable wedding details are stored in:

```text
src/data/weddingData.js
```

### 1. Edit Bride Name & Qualification

```js
bride: {
  title: "Chi. La. Sow.",
  name: "Mohana Priya",
  qualification: ""
}
```

### 2. Edit Groom Name & Qualification

```js
groom: {
  title: "Chi.",
  name: "Likhith Varma",
  qualification: ""
}
```

### 3. Edit Parents Information

```js
brideParents: {
  father: "Late Sri Konduru Ramraju",
  mother: "Smt. Vijaya",
  location: "Polluru"
},
groomParents: {
  father: "Sri Manohar Raju",
  mother: "Smt. Venkata Ramanamma",
  location: "Duggunta Rajupalem"
}
```

### 4. Edit Wedding Date & Time

```js
wedding: {
  date: "2026-11-26", // YYYY-MM-DD
  time: "04:40",       // HH:MM (24-hour format)
  displayDate: "Thursday, 26th November 2026",
  displayTime: "4:40 AM – 4:44 AM",
  nakshatram: "Mrugasira Nakshatram",
  lagnam: "Tula Lagnam"
}
```

### 5. Edit Venue & Google Maps URL

```js
venue: {
  name: "MR Convention",
  complex: "Podalakur",
  address: "Podalakur",
  city: "Podalakur",
  state: "Andhra Pradesh",
  country: "India",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=MR+Convention+Podalakur"
}
```

### 6. Replace Gallery Photos

Add your photo files to `public/assets/images/` and update `gallery` in `weddingData.js`:

```js
gallery: [
  { url: "/assets/images/photo-1.jpg", caption: "Mohana Priya & Likhith Varma" },
  { url: "/assets/images/photo-2.jpg", caption: "Sacred Garlands & Blessings" },
  { url: "/assets/images/photo-3.jpg", caption: "A Journey of Togetherness & Joy" }
]
```

### 7. Replace Background Music

Place your MP3 file in `public/assets/music/wedding-audio.mp3` and update:

```js
music: {
  enabled: true,
  file: "/assets/music/wedding-audio.mp3"
}
```

### 8. Change WhatsApp RSVP Number

```js
whatsapp: {
  number: "919876543210", // Country code + phone number without + or spaces
  message: "Namaste! Warmest congratulations to Mohana Priya & Likhith Varma. I am delighted to accept your wedding invitation!"
}
```

---

## 📁 Directory Structure

```text
wedding-invitation/
├── public/
│   └── assets/
│       ├── images/          # Gallery photos
│       ├── decorations/     # SVG ornaments & motifs
│       ├── illustrations/   # Main wedding artwork
│       └── music/           # Wedding ambient audio
│
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx # Opening envelope animation
│   │   ├── Navbar.jsx        # Floating subtle menu
│   │   ├── Hero.jsx          # Traditional invitation intro
│   │   ├── Family.jsx        # Family blessings
│   │   ├── Events.jsx        # Sumuhurtham & Dinner
│   │   ├── Countdown.jsx     # Live countdown timer
│   │   ├── Venue.jsx         # Venue details & Google Map
│   │   ├── Gallery.jsx       # Photo gallery & lightbox
│   │   ├── RSVP.jsx          # RSVP form & WhatsApp button
│   │   ├── Closing.jsx       # Deep maroon closing screen
│   │   └── MusicControl.jsx  # Floating music toggle
│   │
│   ├── data/
│   │   └── weddingData.js    # Single source of truth
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```
