const prodEnv = process.env.NODE_ENV === 'production'
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './**/*.html',
    // './src/**/*.vue',
  ],
  whitelist: ['tns-item', 'tns-slide-active'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    prodEnv ? purgecss : null
  ]
};
