module.exports = {
  content: ["./public/**/*.html"],
  css: ["./public/assets/main.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
