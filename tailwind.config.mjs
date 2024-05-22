/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors : {
      // 'primary': '#025A4E',
      // 'secondary': '#E7B89C',
      // 'tertiary': '#466763',
      // 'purple': '#D095E5',
      // 'orange': '#E7B89C',
      // 'blue': '#BDDFFA',
      // 'green': '#A3DCD4',
      // 'title-card': '#293D3B',
      // 'white': '#FFFFFF',
      // 'black': '#1C1C1C',

      'primary': '#212128',
      'secondary': '#FFAB00',
      'white': '#FFFFFF',
      'gray': '#34353A',
      'green': '#39CB36'
    },
		extend: {
      keyframes: {
        blob: {
          "0%": {
            translate: "0 0",
            rotate: "0deg",
          },
          "30%": {
            rotate: "40deg",
          },
          "50%": {
          },
          "80%": {
            rotate: "90%",
            transform: "translate(-1900px, 1900px)"
          },
        },
        blobReverse: {
          "0%": {
            translate: "0 0",
            rotate: "0deg",
          },
          "30%": {
            rotate: "40deg",
          },
          "50%": {
          },
          "80%": {
            rotate: "90%",
            transform: "translate(1300px, 30px) "
          },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50px)',
          },
          '70%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '80%': {
            opacity: 1,
            transform: 'scale(1.2)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        hideInUp: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(20px)',
            opacity: 0,
          },
        },
      },
      animation: {
        blob: "blob 30s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        "blob-reverse":
          "blobReverse 30s infinite cubic-bezier(0.215, 0.61, 0.355, 1)",
         "fade-in-up": "fadeInUp 1s ease-out",
         "hide-in-up": "hideInUp 1s ease-out",
      },
    },
	},
	plugins: [],
}
