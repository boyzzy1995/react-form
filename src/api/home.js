import axios from 'axios';

const baseApi = 'http://www.mocky.io/v2/5ea28891310000358f1ef182';

export const getData = () => {
  return axios.get(baseApi);
}