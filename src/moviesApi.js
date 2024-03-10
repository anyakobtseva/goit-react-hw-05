import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_BEARER;

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const HEADERS = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Accept: "application/json",
  },
};

export const getMovies = async (query, page) => {
  return axios.get("/search/movie", {
    ...HEADERS,
    params: { page: page, query: query, include_adult: false },
  });
};

export const getTrendingMovies = async () => {
  return axios.get("/trending/movie/day", {
    ...HEADERS,
  });
};

export const getMovieById = async (id) => {
  return axios.get(`/movie/${id}`, {
    ...HEADERS,
  });
};

export const getReviewsById = async (id) => {
  return axios.get(`/movie/${id}/reviews`, {
    ...HEADERS,
  });
};

export const getCastById = async (id) => {
    return axios.get(`/movie/${id}/credits`, {
      ...HEADERS,
    });
  };

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
export const IMAGE_SIZE = "original";
