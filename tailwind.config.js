/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "leaf":{
          dark:'#308130',
          medium:'#54B435',
          light:'#82CD47'
        },
        "gold":{
          dark:'#E6B80B',
          medium:'#FFCC11',
          light:'#FFD700'
        },
        "ash":{
          dark:'#3C3F42',
          medium:'#5F6369',
          light:'#999FA8'
        },
      },
      fontFamily: {
        inter: "var(--font-inter)"
      },

     
 


    },
  },
  plugins: [],
}
