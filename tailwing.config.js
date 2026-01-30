export default {
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-vertical-rl': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed',
        },
      })
    },
  ],
}
