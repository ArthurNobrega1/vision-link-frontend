module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Configuração para variáveis de ambiente
      ["module:react-native-dotenv", {
        "moduleName": "@env"
      }],
      // Configuração para resolver módulos personalizados
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './src/assets'
          },
        },
      ],
    ],
  };
};
