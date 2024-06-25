module.exports = {
  important: true,
  prefix: 'tw-',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '580px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
      xxxl: '3000px',
    },
    fontFamily: {
      sans: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem'
    },
    spacing: {
      px: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      33: '33px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      42: '42px',
      44: '44px',
      46: '46px',
      48: '48px',
      50: '50px',
      52: '52px',
      54: '54px',
      56: '56px',
      58: '58px',
      60: '60px',
      62: '62px',
      64: '64px',
      68: '68px',
      72: '72px',
      76: '76px',
      80: '80px',
      84: '84px',
      86: '86px',
      90: '90px',
      96: '96px',
      112: '112px',
      128: '128px',
      182: '182px',
      288: '288px',
      342: '342px',
      409: '409px',
      492: '492px',
      610: '610px'
    },
    borderRadius: {
      none: '0',
      sm: '.5rem',
      DEFAULT: '.75rem',
      lg: '1rem',
      full: '9999px'
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 0px 3px rgba(21, 124, 138, 0.20)',
        '3xl-dark': '0px 0px 0px 4px rgb(2, 175, 188)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        dark: {
          primary: '#EC0A0F',
          secondary: '#E3E7EB',
          nero: '#141517',
          "half-black": '#18191C',
          error: '#FC8694',
          success: '#88F7A2',
          warning: '#FCD386',
          woodsmoke: '#141517',
          "eerie-black": '#18191C',
          shark: '#1E2024 ',
          "baltic-sea": '#26282E',
          tuna: '#353840',
          "oslo-gray": '#7F8794',
          "primary-blue": '#83D2DC',
          'onyx': '#32343B',
          ginger: '#FFB82D',
          'charleston-green': '#26282D',
        }
      },
      backgroundImage: {
        'stars-background': "url('/assets/images/bg-stars.png')",
      },
      screens: {
        '2xl': '1920px',
        '3xl': '2048px'
      },
      overflow: {
        initial: 'initial'
      },
      spacing: {
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '55%': '55%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
        '.line-clamp-4': {
          display: '-webkit-box',
          '-webkit-line-clamp': '4',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
      });
    },
  ]
}
