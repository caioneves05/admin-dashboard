import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const addVariablesForColors = ({ theme, addBase }: any) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVariables = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value]),
  );

  addBase({
    ":root": newVariables,
  });
};

const config: Config = {
  darkMode: "class",
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      aurora: "aurora 60s linear infinite",
    },
    keyframes: {
      overlayShow: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
      slideDownAndFade: {
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
        "0%": {
          opacity: "0",
          transform: "translateY(-4px)",
        },
      },
      contentShow: {
        "100%": {
          opacity: "1",
          transform: "translate(-50%, -50%) scale(1)",
        },
        "0%": {
          opacity: "0",
          transform: "translate(-50%, -48%) scale(0.96)",
        },
      },
      lights: {
        "0%": {
          color: "hsl(230, 40%, 80%)",
          "text-shadow":
            "0 0 1em hsla(320, 100%, 50%, 0.2), 0 0 0.125em hsla(320, 100%, 60%, 0.3), -1em -0.125em 0.5em hsla(40, 100%, 60%, 0), 1em 0.125em 0.5em hsla(200, 100%, 60%, 0)",
        },
        "100%": {
          color: "hsl(230, 40%, 80%)",
          "text-shadow":
            "0 0 1em hsla(320, 100%, 50%, 0.2), 0 0 0.125em hsla(320, 100%, 60%, 0.3), 1em -0.125em 0.5em hsla(40, 100%, 60%, 0), -1em 0.125em 0.5em hsla(200, 100%, 60%, 0)",
        },
        "70%": {
          color: "hsl(230, 80%, 90%)",
          "text-shadow":
            "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), 0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)",
        },
        "30%": {
          color: "hsl(230, 80%, 90%)",
          "text-shadow":
            "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 60%, 0.5), -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2), 0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)",
        },
        "40%": {
          color: "hsl(230, 100%, 95%)",
          "text-shadow":
            "0 0 1em hsla(320, 100%, 50%, 0.5), 0 0 0.125em hsla(320, 100%, 90%, 0.5), -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2), 0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4)",
        },
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(15.625rem, 1fr));",
        "auto-fill-card": "repeat(auto-fill, minmax(21.094rem, 1fr));",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        lights: "lights 5s 750ms linear infinite",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaPurple: "#CFCEFF",
        lamaYellow: "#FAE27C",
        lamaSkyLight: "#D1D8DE",
        lamaPurpleLight: "#F1F0FF",
        lamaYellowLight: "#FEFCE8",
        colors: {
          danger: {
            100: "#FBDDDD",
            200: "#F7BBBB",
            300: "#F29899",
            400: "#EE7677",
            500: "#EA5455",
            600: "#D34C4D",
            700: "#C74748",
            800: "#BB4344",
            900: "#AF3F40",
          },
          warning: {
            100: "#FFECD9",
            200: "#FFD9B4",
            300: "#FFC58E",
            400: "#FFB269",
            500: "#FF9F43",
            600: "#E68F3C",
            700: "#D98739",
            800: "#CC7F36",
            900: "#BF7732",
          },
          dark: {
            50: "#f5f6f6",
            100: "#e5e7e8",
            200: "#cdd1d4",
            300: "#abb2b5",
            400: "#818a8f",
            500: "#666f74",
            600: "#575e63",
            700: "#4a5054",
            800: "#424648",
            900: "#3a3d3f",
            950: "#111213",
          },
          comet: {
            50: "#f6f6f9",
            100: "#ececf2",
            200: "#d5d6e2",
            300: "#b0b2c9",
            400: "#8589ab",
            500: "#5f6388",
            600: "#515478",
            700: "#424462",
            800: "#393b53",
            900: "#333447",
            950: "#22222f",
          },
          smoke: {
            50: "#f6f6f6",
            100: "#e7e7e7",
            200: "#d1d1d1",
            300: "#b0b0b0",
            400: "#888888",
            500: "#6d6d6d",
            600: "#5d5d5d",
            700: "#4f4f4f",
            800: "#454545",
            900: "#3d3d3d",
            950: "#1a1a1a",
          },
          shark: {
            50: "#f6f6f6",
            100: "#e7e7e7",
            200: "#d1d1d1",
            300: "#b0b0b0",
            400: "#888888",
            500: "#6d6d6d",
            600: "#5d5d5d",
            700: "#4f4f4f",
            800: "#454545",
            900: "#3d3d3d",
            950: "#242424",
          },
          cobalt: {
            50: "#f1f5fd",
            100: "#dfeafa",
            200: "#c6d9f7",
            300: "#a0c2f0",
            400: "#72a1e8",
            500: "#517fe0",
            600: "#3c64d4",
            700: "#3655ca",
            800: "#2f439e",
            900: "#2b3c7d",
            950: "#1e274d",
          },
          primary: {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            950: "#083b8d",
          },
          zumthor: {
            50: "#f4f7fa",
            100: "#e2e8f0",
            200: "#d4dde9",
            300: "#b6c7da",
            400: "#93aac7",
            500: "#7991b8",
            600: "#677ca9",
            700: "#5b6c9a",
            800: "#4e5a7f",
            900: "#424b66",
            950: "#2b3040",
          },
          success: {
            50: "#ecfdf7",
            100: "#d1faec",
            200: "#a7f3da",
            300: "#6ee7bf",
            400: "#34d39e",
            500: "#10b981",
            600: "#059666",
            700: "#047852",
            800: "#065f42",
            900: "#064e36",
            950: "#022c1e",
          },
          porcelain: {
            50: "#f3f7fa",
            100: "#e9f0f5",
            200: "#cedfe9",
            300: "#a2c4d7",
            400: "#70a5c0",
            500: "#4e8aa9",
            600: "#3c6f8d",
            700: "#315973",
            800: "#2c4d60",
            900: "#294151",
            950: "#1b2a36",
          },
          "rock-blue": {
            50: "#f4f7f9",
            100: "#ebf0f4",
            200: "#dbe3ea",
            300: "#c5d1dc",
            400: "#acbacd",
            500: "#94a2bc",
            600: "#808cab",
            700: "#6d7795",
            800: "#5a6279",
            900: "#4c5363",
            950: "#2c303a",
          },
          "port-gore": {
            50: "#f1f3fd",
            100: "#dee3fb",
            200: "#c5d0f8",
            300: "#9db2f3",
            400: "#6f8beb",
            500: "#4d63e4",
            600: "#3845d8",
            700: "#2f33c6",
            800: "#2c2ca1",
            900: "#282b80",
            950: "#23235f",
          },
          "white-lilac": {
            50: "#fbfaff",
            100: "#ece8ff",
            200: "#dcd5ff",
            300: "#c2b4fe",
            400: "#9c84fc",
            500: "#7755f7",
            600: "#5c33ea",
            700: "#4a22ce",
            800: "#4321a8",
            900: "#381c87",
            950: "#1f0764",
          },
          "athens-gray": {
            50: "#f3f4f8",
            100: "#e8eaf1",
            200: "#d6dae7",
            300: "#bac0d6",
            400: "#99a2c1",
            500: "#8087b1",
            600: "#6e72a2",
            700: "#626393",
            800: "#53537a",
            900: "#464662",
            950: "#2d2d3e",
          },
        },
      },
    },
  },
};

export default config;
