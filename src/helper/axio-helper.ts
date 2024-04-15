import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://pokeapi.co/",
});

export const getAPI = (url: string) => {
  return axiosClient.get(url);
};

export const postAPI = (url: string, data: any) => {
  return axiosClient.post(url, data);
};

export const deleteAPI = (url: string) => {
  return axiosClient.delete(url);
};
