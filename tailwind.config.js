module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        agrandir: ['Agrandir'],
        editorial: ['"Editorial New"']
      },
      colors: {
        accent: 'var(--theme-color)',
        primary: {
          brick: {
            DEFAULT: '#A55B50',
            '50': '#E4CCC8',
            '100': '#DEBFBA',
            '200': '#D0A59F',
            '300': '#C38C83',
            '400': '#B67268',
            '500': '#A55B50',
            '600': '#7F463E',
            '700': '#59312B',
            '800': '#341C19',
            '900': '#0E0807',
          },
          orange: {
            DEFAULT: '#FAA732',
            '50': '#FEF4E5',
            '100': '#FEEBD1',
            '200': '#FDDAA9',
            '300': '#FCC982',
            '400': '#FBB85A',
            '500': '#FAA732',
            '600': '#EE8E06',
            '700': '#B76D04',
            '800': '#814D03',
            '900': '#4A2C02',
          },
          green: {
            DEFAULT: '#50C3A4',
            '50': '#D9F2EB',
            '100': '#CAEDE3',
            '200': '#ABE2D3',
            '300': '#8DD8C4',
            '400': '#6ECDB4',
            '500': '#50C3A4',
            '600': '#38A386',
            '700': '#2A7964',
            '800': '#1B4F41',
            '900': '#0D261F',
          },
          purple: {
            DEFAULT: '#AF87C3',
            '50': '#FFFFFF',
            '100': '#F8F4F9',
            '200': '#E5D9EC',
            '300': '#D3BDDE',
            '400': '#C1A2D1',
            '500': '#AF87C3',
            '600': '#9662B0',
            '700': '#794991',
            '800': '#5A366C',
            '900': '#3B2346',
          },
          blue: {
            DEFAULT: '#5A9FDC',
            '50': '#F1F7FC',
            '100': '#E1EDF9',
            '200': '#BFDAF1',
            '300': '#9DC6EA',
            '400': '#7CB3E3',
            '500': '#5A9FDC',
            '600': '#2C84D1',
            '700': '#2367A3',
            '800': '#194A75',
            '900': '#0F2D47',
          },
          pink: {
            DEFAULT: '#E65583',
            '50': '#FEF5F8',
            '100': '#FBE3EB',
            '200': '#F6C0D1',
            '300': '#F09CB7',
            '400': '#EB799D',
            '500': '#E65583',
            '600': '#DF245F',
            '700': '#B11A4A',
            '800': '#801335',
            '900': '#4F0C21',
          },
        },
        cloudy: {
          DEFAULT: '#B1AFAA',
          '50': '#F5F5F4',
          '100': '#ECEBEA',
          '200': '#D8D7D5',
          '300': '#C5C3BF',
          '400': '#B1AFAA',
          '500': '#96938D',
          '600': '#7A7870',
          '700': '#5D5B56',
          '800': '#403E3B',
          '900': '#232220',
        },
        stone: {
          DEFAULT: '#888582',
          '50': '#E2E1E0',
          '100': '#D8D7D6',
          '200': '#C4C2C1',
          '300': '#B0AEAC',
          '400': '#9C9997',
          '500': '#888582',
          '600': '#6C6966',
          '700': '#4F4D4B',
          '800': '#323130',
          '900': '#151514',
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionProperty: {
        height: 'height',
      },
      brightness: {
        70: '0.7',
      },
    },
  },
  plugins: [],
}
