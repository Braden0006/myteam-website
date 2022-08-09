module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#014E56',
        footergreen: '#002529',
        darkergreen: '#012F34',
        lightergreen: '#004047',
        menugreen: '#2C6269',
        lightred: '#F67E7E',
        darkgreen: '#012F34',
        cyan: '#79C8C7',
        footercolor: '#ffffff87',
        transparentwhite: '#FFFFFF01',
        transparentblack: '#000000a6',
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        '25v': '25vh',
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        '50%': '50%',
        '55%': '55%',
        "60v": "60vh",
        '62px': '62px',
        "70v": "70vh",
        '70%': '70%',
        "80v": "80vh",
        '80%': '80%',
        "90v": "90vh",
        '90%': '90%',
        '96px': '96px',
        "100v": "100vh",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        '50%': '50%',
        '55v': '55vw',
        "60v": "60vw",
        '60%': '60%',
        '65v': '65vw',
        '65%': '65%',
        "70v": "70vw",
        '75v': '75vw',
        '70%': '70%',
        '78v': '78vw',
        "80v": "80vw",
        '85v': '85vw',
        '80%': '80%',
        "90v": "90vw",
        '90%': '90%',
        "100v": "100vw",
      },
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
      },
      fontSize: {
        '100': '6.25rem',
        '64': '4rem',
        '40': '2.5rem',
        '32': '2rem',
        '15': '15px',
      },
      inset: {
        '100px': '100px',
        '26': '6.5rem',
      },
      lineHeight: {
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
};
