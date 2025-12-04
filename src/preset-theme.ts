import { presetWind4 } from "@unocss/preset-wind4";
import presetAttributify from "@unocss/preset-attributify";

export const presetTheme = () => ({
  name: "preset-theme",

  presets: [presetWind4(), presetAttributify()],

  theme: {
    colors: {
      bg: "var(--bg)",
      text: "var(--text)",
      textSecondary: "var(--text-secondary)",
      button: "var(--button-bg)",
      buttonHover: "var(--button-hover-bg)",
      textLink: "var(--text-link)",
      glass: "var(--glass-bg)",
      primary: "var(--primary)",
      shadow: "var(--shadow-color)",
      bgAuth: "var(--bg-auth-colour)",
      authButton: "var(--auth-button-bg)",
      bgInput: "var(--bg-input)",
      textInput: "var(--text-input)",
    },
  },

  rules: [
    ["shadow-soft", { "box-shadow": "0 0 20px var(--shadow-color)" }],
    ["shadow-spread", { "box-shadow": "0 0 30px 6px var(--shadow-color)" }],
  ],

  shortcuts: {
    "glass-card": "bg-glass backdrop-blur-md rounded-xl p-4",
  },
});
