import {API_USERS} from './constants-api';

class ServiceApi {
  async getUserAll() {
    const response = await fetch(API_USERS);
    return response.json();
  }

  async getUserById(id: string) {
    const response = await fetch(`${API_USERS}/${id}`);
    return response.json();
  }
}

export default new ServiceApi();
