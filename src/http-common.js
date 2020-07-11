import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  // endereço da api
  baseURL: 'http://localhost:8081/',
  headers: {
    'Content-type': 'application/json',
  },
});
