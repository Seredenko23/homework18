import {BASE_URL} from "../config/config";

class ItemService {
  async getItems() {
    const response = await fetch(`${BASE_URL}/item`)

    if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

    return await response.json()
  }

  async createItems(item) {
    const response = await fetch(`${BASE_URL}/item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })

    if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

    return await response.json()
  }

  async updateItem(id, isBought) {
    const response = await fetch(`${BASE_URL}/item/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({isBought: isBought}),
    })

    if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

    return await response.json()
  }

  async deleteItem(id) {
    const response = await fetch(`${BASE_URL}/item/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if(response.status >= 400 && response.status <= 600) throw Error('Bad response');

    return true
  }
}

const itemService = new ItemService()

export default itemService
