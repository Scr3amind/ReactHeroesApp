module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': "url('img/wave.svg')",
        'batman-pattern': "url('img/batman.svg')",
        'comic-pattern': "url('img/comic_pattern.jpg')",
      })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
