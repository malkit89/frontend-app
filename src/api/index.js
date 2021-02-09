/**
 * Wrapper per tutte le api del app
 */
import { CiclaturaApi } from './ciclatura/ciclatura_api.js';

export default {
  ciclaturaApi: function() {
    return new CiclaturaApi();
  }
};
