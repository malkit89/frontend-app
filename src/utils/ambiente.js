/**
 * Fornisce i parametri in base al ambiente di sviluppo
 */
export function getServerUrl() {
  const server = {
    casa: 'http://localhost:3000/',
    lavoro: 'http://localhost:3000/',
    gitpod: 'http://localhost:3000/'
  };
  return server[process.env.AMB];
}

/**
 * Indica se è attivo il flag per caricare dati fake
 */
export function isFake() {
  if (process.env.IS_FAKE == 'true') {
    return true;
  }
  return false;
}
