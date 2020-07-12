import axios from 'axios';
import cors from 'cors';

app.use(cors());

//Define a URL base da origem para consumo do servico
export default axios.create({
  // endereço da api
  baseURL: 'https://grade-back-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
