import axios, { RawAxiosRequestHeaders } from "axios";

export default () => ({
  get: <D>(
    path: string,
    config?: { data?: D; headers?: RawAxiosRequestHeaders }
  ) => axios.get(path, { data: config?.data, headers: config?.headers }),
});
