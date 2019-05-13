// Import do Client AXIOS
import axios from '../plugins/axios'

// Exportando uma constante chamada HTTP para representar o Axios com suas configurações
export const http = axios.create({
  baseURL: 'https://api.github.com/'
})
