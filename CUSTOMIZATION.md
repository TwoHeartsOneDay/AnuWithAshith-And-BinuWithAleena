# 🎨 Customization Guide

## Quick Customization Tips

### 1. Change Wedding Details

#### Update Couple Names
Edit [src/components/Hero.jsx](src/components/Hero.jsx):
```jsx
// Line 48-52 and 66-70
<h2 className="...">Your Groom Name</h2>
<h2 className="...">Your Bride Name</h2>
```

#### Update Wedding Date
Edit [src/components/Countdown.jsx](src/components/Countdown.jsx):
```jsx
// Line 5
const weddingDate = new Date('2026-02-14T00:00:00')
```

Also update display dates in:
- [src/components/Hero.jsx](src/components/Hero.jsx) - Line 85
- [src/components/EventDetails.jsx](src/components/EventDetails.jsx) - Lines 11 & 20
- [src/components/Footer.jsx](src/components/Footer.jsx) - Line 144

#### Update Venues
Edit [src/components/EventDetails.jsx](src/components/EventDetails.jsx):
```jsx
// Lines 6-23
venue: 'Your Ceremony Venue',
location: 'Your City',
```

### 2. Modify Colors

#### Change Color Scheme
Edit [tailwind.config.js](tailwind.config.js):

```js
colors: {
  peach: {
    50: '#fff5f0',  // Lightest peach
    100: '#ffe8dc',
    200: '#ffd4c1', // Main peach
    // ... adjust to your preference
  },
  gold: {
    DEFAULT: '#D4AF37',  // Main gold
    light: '#F4E5C3',
    dark: '#B8941F',
  },
  deepRed: {
    DEFAULT: '#8B1538',  // Main red
    light: '#A91D42',
    dark: '#6B0F2A',
  },
}
```

#### Popular Alternative Color Schemes

**Sage & Gold** (Natural elegance):
```js
sage: {
  50: '#f5f7f4',
  100: '#e8ede6',
  200: '#d1dbc8',
}
```

**Blush & Rose Gold**:
```js
blush: {
  50: '#fff5f7',
  100: '#ffe4ea',
  200: '#ffc9d9',
}
```

**Navy & Gold** (Classic):
```js
navy: {
  DEFAULT: '#1e3a5f',
  light: '#2c5282',
  dark: '#152a45',
}
```

### 3. Change Fonts

#### Update Google Fonts
Edit [index.html](index.html):
```html
<!-- Line 11 - Replace with your chosen fonts -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600&display=swap" rel="stylesheet">
```

#### Apply New Fonts
Edit [tailwind.config.js](tailwind.config.js):
```js
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

#### Recommended Font Combinations

**Romantic Classic**:
- Serif: Playfair Display
- Sans: Raleway

**Modern Elegant**:
- Serif: Abril Fatface
- Sans: Lato

**Vintage Charm**:
- Serif: Cinzel
- Sans: Quicksand

### 4. Adjust Animations

#### Speed Up/Slow Down Animations
In any component file, modify `duration`:

```jsx
// Slower animation (more dramatic)
transition={{ duration: 1.5 }}

// Faster animation (more energetic)
transition={{ duration: 0.3 }}
```

#### Change Animation Style
Edit `ease` values:
```jsx
// Smooth and natural
transition={{ ease: "easeOut" }}

// Bouncy and playful
transition={{ ease: "easeInOut" }}

// Linear and steady
transition={{ ease: "linear" }}
```

#### Disable Animations
If you want simpler, non-animated sections:
```jsx
// Remove or comment out Framer Motion props
<motion.div
  // initial={{ opacity: 0 }}
  // animate={{ opacity: 1 }}
>
```

### 5. Add Your Photos

#### Create Photos Folder Structure
```
public/
  photos/
    couple1/
      photo1.jpg
      photo2.jpg
    couple2/
      photo1.jpg
      photo2.jpg
```

#### Create Photo Gallery Component
Create [src/components/Gallery.jsx](src/components/Gallery.jsx):

```jsx
import { motion } from 'framer-motion'

const Gallery = () => {
  const photos = [
    '/photos/couple1/photo1.jpg',
    '/photos/couple1/photo2.jpg',
    // Add more photos
  ]

  return (
    <section className="py-20 bg-peach-50">
      <h2 className="text-5xl font-serif text-gold text-center mb-12">
        Our Journey
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {photos.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            className="rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
```

Add to [src/App.jsx](src/App.jsx):
```jsx
import Gallery from './components/Gallery'

// Inside App component
<Gallery />
```

### 6. Customize Map Locations

Edit [src/components/Locations.jsx](src/components/Locations.jsx):

```jsx
// Lines 6-7 and 14-15
// Replace with your actual Google Maps embed URLs
mapUrl: 'YOUR_EMBED_URL_HERE'
```

#### Get Google Maps Embed URL:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Paste into the `mapUrl` field

### 7. Add RSVP Form

Create [src/components/RSVP.jsx](src/components/RSVP.jsx):

```jsx
import { motion } from 'framer-motion'
import { useState } from 'react'

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic
    console.log(formData)
  }

  return (
    <section className="py-20 px-4 bg-peach-100">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-5xl font-serif text-gold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          RSVP
        </motion.h2>
        
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 mb-4 rounded-xl border-2 border-gold/30"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {/* Add more form fields */}
          
          <motion.button
            type="submit"
            className="w-full bg-deepRed text-white py-4 rounded-xl font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send RSVP
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default RSVP
```

### 8. Change Background Patterns

#### Add Texture
Edit [src/index.css](src/index.css):

```css
body {
  background: linear-gradient(135deg, #fff5f0 0%, #ffe8dc 50%, #ffd4c1 100%);
  /* Add texture */
  background-image: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23ffe8dc'/%3E%3Cpath d='M30 30L0 0h60v60H0z' fill='%23ffd4c1' fill-opacity='0.1'/%3E%3C/svg%3E"),
    linear-gradient(135deg, #fff5f0 0%, #ffe8dc 50%, #ffd4c1 100%);
}
```

### 9. Add Video Background

Create [src/components/VideoHero.jsx](src/components/VideoHero.jsx):

```jsx
const VideoHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/wedding-video.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Your hero content */}
      </div>
    </section>
  )
}
```

### 10. Optimize for Your Deployment

#### Update Base Path
If deploying to a subdirectory, edit [vite.config.js](vite.config.js):

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-folder-name/',  // Change this
})
```

#### Update Site Metadata
Edit [index.html](index.html):
```html
<title>Your Names - Wedding</title>
<meta name="description" content="Your custom description" />
```

## Need More Help?

- Check component files for inline comments
- Review Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs

---

**Happy Customizing! 🎨✨**
