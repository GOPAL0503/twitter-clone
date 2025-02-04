module.exports = {
  presets: ["react-app"],
  plugins: [
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-transform-private-property-in-object", // updated plugin
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-nullish-coalescing-operator",
  ],
};
