/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary': '#111213',
      'secondary': '#9C9C9C',
      'light-grey': '#F0F0F0',
      'red': '#D6001C',
      'darkred': '#A70319',
    },
    extend: {
      fontFamily: {
        'noto': 'Noto',
        'noto-italic': 'NotoItalic',
        'noto-black': 'NotoBlack',
        'noto-black-italic': 'NotoBlackItalic',
        'noto-bold': 'NotoBold',
        'noto-bold-italic': 'NotoBoldItalic',
        'noto-extra-bold': 'NotoExtraBold',
        'noto-extra-bold-italic': 'NotoExtraBoldItalic',
        'noto-extra-light': 'NotoExtraLight',
        'noto-extra-light-italic': 'NotoExtraLightItalic',
        'noto-light': 'NotoLight',
        'noto-light-italic': 'NotoLightItalic',
        'noto-medium': 'NotoMedium',
        'noto-medium-italic': 'NotoMedimuItalic',
        'noto-semi-bold': 'NotoSemiBold',
        'noto-semi-bold-italic': 'NotoSemiBoldItalic',
        'noto-thin': 'NotoThin',
        'noto-thin-italic': 'NotoThinItalicc',
      }
    },
  },
  plugins: [],
}

