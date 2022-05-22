module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",

          secondary: "#F000B8",

          accent: "#212529",

          neutral: "#244185",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#01091c",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
