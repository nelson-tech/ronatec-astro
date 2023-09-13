// import { join } from "path"
import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

// import { skeleton } from "@skeletonlabs/tw-plugin"
import tailwindForms from "@tailwindcss/forms"

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    // join(
    //   require.resolve("@skeletonlabs/skeleton"),
    //   "../**/*.{html,js,svelte,ts}"
    // ),
  ],
  theme: {
    extend: {
      colors: {
        electric: "#db00ff",
        ribbon: "#0047ff",
        primary: "var(--primary)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        hover: "var(--hover)",
        "hover-1": "var(--hover-1)",
        "hover-2": "var(--hover-2)",
        "accents-0": "var(--accents-0)",
        "accents-1": "var(--accents-1)",
        "accents-2": "var(--accents-2)",
        "accents-3": "var(--accents-3)",
        "accents-4": "var(--accents-4)",
        "accents-5": "var(--accents-5)",
        "accents-6": "var(--accents-6)",
        "accents-7": "var(--accents-7)",
        "accents-8": "var(--accents-8)",
        "accents-9": "var(--accents-9)",
        violet: { main: "var(--violet)", light: "var(--violet-light)" },
        pink: { main: "var(--pink)" },
        cyan: { main: "var(--cyan)" },
        blue: {
          dark: "#485D7D",
          light: "#6B82A6",
          main: "#5375A0",
        },
        teal: "#32de8a",
        green: { main: "var(--green)" },
        red: { main: "#d72638" },
        // white: "#fffaff",
        black: "#0d1821",
        accent: "#5375A0",
        "accent-dark": "#485D7D",
        "accent-light": "#5375A0",
        highlight: "#37b679",
        error: "#d72638",
      },
      fontFamily: {
        sans: ["exo", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // skeleton({})
    tailwindForms,
  ],
} satisfies Config

export default config
