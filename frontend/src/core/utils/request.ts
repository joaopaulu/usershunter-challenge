import axios, { AxiosResponse, Method, RawAxiosRequestConfig } from 'axios';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
};

const BASE_URL = 'http://localhost:4000';

const makeRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
  });
};

export const requestBackend = (config: RawAxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers })
    .then((response: AxiosResponse) => ({
      data: response.data,
      headers: response.headers,
    }))
    .catch(error => {
      throw error;
    });
};

export const makeRequestPost = ({
  method = 'POST',
  url,
  data,
}: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
  });
};

export default makeRequest;
