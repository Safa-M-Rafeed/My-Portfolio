module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#222831",
        charcoal2: "#393E46",
        olive: "#948979",
        beige: "#DFD0B8",
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin-slow 8s linear infinite', // Register your custom spin
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
