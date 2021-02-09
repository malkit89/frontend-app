import HttpRequest from '@/utils/http_request';

class PersonProvider extends HttpRequest {
  createUser(data) {
    return this.create('', data);
  }
}

export default PersonProvider;
