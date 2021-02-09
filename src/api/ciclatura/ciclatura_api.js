/**
 * Fornisce tutti i dati riguardanti la ciclatura
 */
import { BaseApi } from '@/api/base_api';
import { isFake } from '@/utils/ambiente';
import { fake_getDatiCiclatura } from '@/api/fake/ciclatura';

export const Endpoints = {
  GET_DATI: 'api/ciclatura'
};

export class CiclaturaApi extends BaseApi {
  /**
   * Restiuisce i dati di tutte le macchine di cicaltura
   */
  async getDatiCiclatura() {
    let dati = { msg: 'No data' };
    try {
      if (isFake()) {
        dati = await fake_getDatiCiclatura();
      } else {
        let response = await this.getRequest(Endpoints.GET_DATI);
        dati = response.data;
      }
      // console.log(dati);
    } catch (error) {
      console.log('Errore api call');
    }
    return dati;
  }
}
