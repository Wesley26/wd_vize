/**
 * tailwind config file
 */

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/**/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '20pix': '20px',
      },
      colors: {
        'primary-bg': '#ffffff',
        'text-bg': '#f2f2f2',
        'theme-darkGray': '#3f4957',
        'theme-blue': '#4561e1',
        'theme-lightBlue': '#d1dff0',
      },
      fontFamily: {
        'body': ['"DM Sans"', 'system-ui'],
      },
      height: {
        '54pix': '54px',
        '64pix': '64px',
        '280pix': '280px',
      },
      spacing: {
        '3pix': '3px',
        '10pix': '10px',
        '47pix': '47px',
        '82pix': '82px',
        '200pix': '200px',
      },
      width: {
        '265pix': '265px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      gridAutoFlow: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};