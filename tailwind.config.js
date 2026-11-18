/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haveli: {
          dark: '#0A0507',
          charcoal: '#12090E',
          maroon: '#2B0413',
          maroonLight: '#3F081E',
          pink: '#EB1460',
          pinkGlow: '#FF2A7B',
          pinkMute: 'rgba(235, 20, 96, 0.15)',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          goldDark: '#997B20',
          sandstone: '#C89D76',
          sandstoneLight: '#E8C39E',
          sandstoneDark: '#5E3E24',
          card: 'rgba(26, 8, 16, 0.78)',
          borderGold: 'rgba(212, 175, 55, 0.35)',
          borderPink: 'rgba(235, 20, 96, 0.3)',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cinzelDec: ['"Cinzel Decorative"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.5)',
        'pink-glow': '0 0 35px rgba(235, 20, 96, 0.45)',
        'haveli-card': '0 15px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #997B20 100%)',
        'pink-gradient': 'linear-gradient(135deg, #FF2A7B 0%, #EB1460 60%, #9E0B3F 100%)',
        'maroon-gradient': 'linear-gradient(180deg, #18030B 0%, #2B0413 50%, #120208 100%)',
      }
    },
  },
  plugins: [],
}
