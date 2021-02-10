/**
 * Fornisce i parametri in base al ambiente di sviluppo
 */
export function getServerUrl() {
  const server = {
    casa: 'http://localhost:3000/',
    lavoro: '/',
    gitpod: 'http://localhost:3000/'
  };
  //  In development scelgo url del server, in production frontend è servito sul url del server
  let baseUrl = server[process.env.VUE_APP_AMB] || '/';
  return baseUrl;
}

/**
 * Indica se è attivo il flag per caricare dati fake
 */
export function isFake() {
  if (process.env.VUE_APP_IS_FAKE == 'true') {
    return true;
  }
  return false;
}
