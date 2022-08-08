module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#014E56',
        darkergreen: '#012F34',
        lightergreen: '#004047',
        lightred: '#F67E7E',
        darkgreen: '#012F34',
        cyan: '#79C8C7',
        transparentwhite: '#FFFFFF01',
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        '62px': '62px',
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        '96px': '96px',
        "100v": "100vh",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        '55v': '55vw',
        "60v": "60vw",
        "70v": "70vw",
        '78v': '78vw',
        "80v": "80vw",
        '85v': '85vw',
        "90v": "90vw",
        "100v": "100vw",
      },
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
      },
      fontSize: {
        '40': '2.5rem',
        '32': '2rem',
        '15': '15px',
      },
      inset: {
        '100px': '100px',
        '26': '6.5rem',
      }
    },
  },
  plugins: [],
};
