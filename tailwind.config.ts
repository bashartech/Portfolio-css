import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			'fadeIn': 'fadeIn 1s ease-in forwards',
			'slideInLeft': 'slideInLeft 1s ease-in forwards',
			'slideInRight': 'slideInRight 1s ease-in forwards',
			'slideInDown': 'slideInDown 1s ease-in forwards',
		  },
		  keyframes: {
			fadeIn: {
			  '0%': { opacity: '0' },
			  '100%': { opacity: '1' },
			},
			slideInLeft: {
			  '0%': { transform: 'translateX(-100%)', opacity: '0' },
			  '100%': { transform: 'translateX(0)', opacity: '1' },
			},
			slideInRight: {
			  '0%': { transform: 'translateX(100%)', opacity: '0' },
			  '100%': { transform: 'translateX(0)', opacity: '1' },
			},
			slideInDown: {
			  '0%': { transform: 'translateY(-100%)', opacity: '0' },
			  '100%': { transform: 'translateY(0)', opacity: '1' },
			},
		  },
  		colors: {
			  background: 'hsl(var(--background))',
			  main : " #0ef",
			  text: "#fff",
			  bgColor : " #1f242d",
			  second : "#323946",
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
