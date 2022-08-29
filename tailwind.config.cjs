const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#b45309",
          "secondary": "#fdba74",
          "accent": "#3b82f6",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#8b5cf6",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        }
      }
    ]
  },

  plugins: [require("daisyui")]
};

module.exports = config;
