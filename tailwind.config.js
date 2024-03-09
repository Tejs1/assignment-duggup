/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				"ring-2": "hsl(var(--ring-2))",
				charcoal: "hsl(var(--charcoal-gray))",
				electric: "hsl(var(--electric-blue))",
				taint: "hsl(var(--primary-background))",
				azure: "hsl(var(--azure-gray))",
				"c-6": "var(--c-6)",
				"color-tokens-content-neutral-primary-regular":
					"var(--color-tokens-content-neutral-primary-regular)",
				"colors-prerequisite-neutral-neutral-700": "var(--colors-prerequisite-neutral-neutral-700)",
				"colors-prerequisite-neutral-neutral-800": "var(--colors-prerequisite-neutral-neutral-800)",
				"colors-prerequisite-primary-primary-600": "var(--colors-prerequisite-primary-primary-600)",
				"colors-prerequisite-white-and-black-white-1000":
					"var(--colors-prerequisite-white-and-black-white-1000)"
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			boxShadow: {
				"charcoal-lg": "0px 4px 0px hsl(var(--charcoal-gray))",
				"charcoal-sm": "0px 2px 0px hsl(var(--charcoal-gray))",
				"navy-sm": "0px 2px 0px hsl(var(--navy-blue))"
			},
			fontFamily: {
				inter: ["Inter Regular"],
				"inter-m": ["Inter Medium"],
				"inter-b": ["Inter Bold"]
			},
			backgroundImage: {
				"dotted-sm": `url('data:image/svg+xml,<svg width="4" height="2" viewBox="0 0 4 2" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" fill="%23fafaff"/><circle cx="50%" cy="50%" r=".5" fill="%23525C69" /></svg>')`,
				"footer-texture": "url('/img/footer-texture.png')"
			}
		}
	}
};

export default config;
