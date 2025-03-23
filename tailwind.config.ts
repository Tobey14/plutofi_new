import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '42': '2.625rem',
        xxs: '8px'
      },
      screens: {
        '1160': '1160px',
        '1232': '1232px',
        xxl: '1440px'
      },
      width: {
        '1160': '1160px',
        '1232': '1232px',
        xxl: '1440px'
      },
      colors: {
        primary: '#000000',  // custom primary color
        plutofi:" #820DCA",
        plutofi_shade:"#F7E9FF",
        secondary: '#667185',  // custom secondary color
        background: '#FFFFFF',  // dashboard background
        sidebar_bg: '#FFFFFF', //sidebar background color
        sidebar_text: '#979797',  // sidebar text color
        sidebar_active: '#EF5A0D',
        muted: '#6B7280',  // Muted text color for less emphasis
        accent: '#F59E0B', // Accent color
        white: '#FFFFFF',
        main: '#91755D',
        grey: {
          900: '#101928',
          100:"#F5F5F5",
          200: '#FAFBFB',
          300: '#CDCDCD',
          500: '#555555',
        },
        success: "#40B869",
        danger: "#B42318",
        warning: "#F5b546",
        badge_success: '#ECFDF3',  // Define bg for badge success
        badge_danger: '#FEF3F2',
        badge_warning: '#FEF6E7',
        badge_pending: '#F7EFE8',
        badge_modal:"#CCDBDC",
        modal_pagination_bg:"#1D2739",
        modal_pagination_disabled_bg:"#344054",
        modal_pagination_text:"#F0F2F5"
      },
      backgroundColor: {
        'default': '#F9FAFB', // default background color

      },
      textColor: {
        'default': '#FF6110',  // default text color
        'primary': '#FF6110',  // primary text color
      },
      borderColor: {
        'primary': '#F0F2F5',  // border color for primary elements
        'amniGreen': '#FF6110',  // border color for primary elements
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '32px'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/login-bg.svg')",
        'dashboard-pattern': "url('/images/dashboard_bg.svg')",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": {  opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slideUp 2s cubic-bezier(0.25, 0.8, 0.5, 1)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"], // Add Satoshi font
      },
      transitionDuration: {
        1000: "1000ms", // Ensure consistency with the gradient timing
      },


    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'), require("tailwindcss-animate")]
};
export default config;


