const angularGlobalSetup = require('jest-preset-angular/global-setup');

module.exports = async () => {
  process.env.TZ = 'America/Sao_Paulo';
  angularGlobalSetup()
};
