module.exports = {
  presets: ["react-app"],
  plugins: [
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object", // or try @babel/plugin-transform-private-property-in-object
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-nullish-coalescing-operator",
  ],
};
