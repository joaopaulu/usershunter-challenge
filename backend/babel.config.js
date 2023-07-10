module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current'} }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@modules": "./src/modules",        
        "@utils/*": ["utils/*"],
        "@components/*": ["components/*"],
        "@controllers/*": ["controllers/*"],
        "@controllers/User/*": ["controllers/User/*"],
        "@services/*": ["services/*"],
        "@services/User/*": ["services/User/*"],
        "@entities/*": ["entities/*"]
      }
    }],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ],
}