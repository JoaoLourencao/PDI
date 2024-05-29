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
    },
    colors: {
      primary: '#FF0000',
      secondary: '#D3D3D3',
      "nero": '#141517',
      "half-black": '#18191C',
      "alice-blue": '#F2F4F5',
      error: '#e60536',
      success: '#006940',
      warning: '#faad14',
      black: '#000000',
      white: '#ffffff',
      whatsapp: '#25D366',
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
  plugins: []
}