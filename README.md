# 💕 Twin Wedding Celebration Website

A premium, elegant, cinematic wedding website for the twin wedding of **Binumon & Aleena** and **Anumon & Dr. Ashith** on **February 14, 2026**.

![Wedding Theme](https://img.shields.io/badge/Theme-Romantic%20Peach%20%26%20Gold-FFD4C1)
![Built with React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.3-FF0055)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38B2AC?logo=tailwind-css)

## ✨ Features

- **Cinematic Animations**: Premium Framer Motion animations throughout
- **Twin Wedding Design**: Elegant showcase of two couples without UI clutter
- **Peach & Gold Theme**: Soft romantic peach backgrounds with gold and deep red typography
- **Fully Responsive**: Beautiful on all devices
- **Live Countdown**: Real-time countdown to the wedding day
- **Interactive Maps**: Embedded Google Maps for venue locations
- **Smooth Scrolling**: Seamless navigation experience
- **Component Architecture**: Clean, maintainable React components

## 🎨 Design Philosophy

### Color Palette
- **Primary Background**: Soft peach gradients (#FFF5F0 → #FFE8DC → #FFD4C1)
- **Gold Typography**: Metallic gold (#D4AF37) for names and headings
- **Deep Red**: Royal maroon (#8B1538) for emphasis and dates
- **Body Text**: Warm gray tones for readability

### Typography
- **Serif Font**: Cormorant Garamond (luxury headings and names)
- **Sans-serif**: Montserrat (body text and navigation)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd MyWed

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/MyWed/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
MyWed/
├── public/
│   └── heart.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with couple names
│   │   ├── Couples.jsx        # Twin wedding cards
│   │   ├── Countdown.jsx      # Wedding countdown timer
│   │   ├── OurStory.jsx       # Emotional story section
│   │   ├── EventDetails.jsx   # Wedding & reception details
│   │   ├── Locations.jsx      # Google Maps integration
│   │   └── Footer.jsx         # Invitation & footer
│   ├── App.jsx                # Main app component
│   ├── App.css                # Custom styles & animations
│   ├── main.jsx               # React entry point
│   └── index.css              # Global Tailwind styles
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies

```

## 🎭 Component Overview

### Hero
Cinematic entrance with animated couple names, wedding date, and floating hearts.

### Couples
Two elegant cards showcasing both couples with hover animations and romantic descriptions.

### Countdown
Live countdown timer with animated numbers showing days, hours, minutes, and seconds until the wedding.

### OurStory
Emotional narrative about the twin brothers' wedding celebration with gold and red typography.

### EventDetails
Beautiful cards for wedding ceremony and reception with venue details and elegant hover effects.

### Locations
Interactive section with embedded Google Maps for both venues and "Get Directions" CTAs.

### Footer
Warm invitation message with family blessings and wedding date reminder.

## 🌐 Deployment

### GitHub Pages (Automated)

This project includes a GitHub Actions workflow for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be live at `https://<username>.github.io/MyWed/`

### Manual Deployment

```bash
npm run deploy
```

## 🎬 Animation Features

- **Page Load Animations**: Cinematic entrance effects
- **Scroll Animations**: Elements reveal on scroll with Framer Motion
- **Hover Effects**: Interactive card and button animations
- **Floating Elements**: Subtle background animations
- **Number Animations**: Animated countdown digits
- **Heart Beats**: Pulsing heart icons
- **Shimmer Effects**: Gold text shimmer

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Animation Library**: Framer Motion 11.0.3
- **Styling**: Tailwind CSS 3.4.0
- **Fonts**: Google Fonts (Cormorant Garamond, Montserrat)
- **Deployment**: GitHub Pages / gh-pages

## 📝 Customization

### Update Wedding Details

Edit the component files in `src/components/` to update:
- Couple names
- Wedding date and time
- Venue addresses
- Personal messages
- Map coordinates

### Change Colors

Modify `tailwind.config.js` to adjust the color palette:
```js
colors: {
  peach: { /* your colors */ },
  gold: { /* your colors */ },
  deepRed: { /* your colors */ },
}
```

### Adjust Animations

Customize Framer Motion animations in component files by modifying:
- `initial` props
- `animate` props
- `transition` durations and easing
- `whileHover` effects

## 👫 Wedding Details

**Couple 1**: Binumon Jacob ❤️ Aleena C Jose  
**Couple 2**: Anumon Jacob ❤️ Dr. Ashith Thomas

**Date**: February 14, 2026  
**Ceremony**: CSI Cathedral Church, Kottayam  
**Reception**: Benjamin Bailey Auditorium, Kottayam

## 📄 License

This is a private wedding website. All rights reserved.

## 💝 Created With Love

Built with React, Framer Motion, and Tailwind CSS for a once-in-a-lifetime twin wedding celebration.

---

*May your love stories be as beautiful as your wedding day* ✨💕

