module.exports = {
  presets: [require('@vercel/edge-functions-ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@vercel/edge-functions-ui/**/*.{js,ts,jsx,tsx}',
  ],
}
