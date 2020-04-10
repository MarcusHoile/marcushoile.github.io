module.exports = {
  content: ["./public/**/*.html"],
  css: ["./public/assets/css/site.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
