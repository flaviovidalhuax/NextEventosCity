import axios from './axios.helper.';

export const fetcher = (
  url: string //url es una peticion
) => axios.get(url).then((resp) => resp.data);
