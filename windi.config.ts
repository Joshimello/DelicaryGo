export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Source Han Serif TC Variable',
        ],
        serif: [
          'Source Han Sans TC Variable'
        ]
      }
    }
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('@windicss/plugin-scrollbar'),
  ]
};  