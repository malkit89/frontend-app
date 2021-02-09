/**
 * Classe base per api providers
 */
import HttpRequest from '@/utils/http_request';
export class BaseApi extends HttpRequest {
  constructor() {
    super();
  }
}
