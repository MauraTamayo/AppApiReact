
import api from './ApiConex'

export default {
  async getCharacters() {
    return await api.get('/character')
  } 
}