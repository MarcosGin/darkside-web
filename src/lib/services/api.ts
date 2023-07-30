import {
  Film,
  FilmPopulated,
  People,
  PeoplePopulated,
  Planet,
  PlanetPopulated,
  Starship,
  StarshipPopulated,
} from "@/types";
import axios from "axios";

export const ClientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getFilms = async () => {
  return ClientApi.get<Film[]>("/films").then((response) => response.data);
};

export const getFilmById = async (id: string) => {
  return ClientApi.get<FilmPopulated>(`/films/${id}`, {
    params: { populate: "characters,planets,starships" },
  }).then((response) => response.data);
};

export const getPeople = async () => {
  return ClientApi.get<People[]>("/people").then((response) => response.data);
};

export const getPeopleById = async (id: string) => {
  return ClientApi.get<PeoplePopulated>(`/people/${id}`, {
    params: { populate: "homeworld,films,starships" },
  }).then((response) => response.data);
};

export const getPlanets = async () => {
  return ClientApi.get<Planet[]>("/planets").then((response) => response.data);
};

export const getPlanetById = async (id: string) => {
  return ClientApi.get<PlanetPopulated>(`/planets/${id}`, {
    params: { populate: "films,residents" },
  }).then((response) => response.data);
};

export const getStarships = async () => {
  return ClientApi.get<Starship[]>("/starships").then(
    (response) => response.data,
  );
};

export const getStarshipById = async (id: string) => {
  return ClientApi.get<StarshipPopulated>(`/starships/${id}`, {
    params: { populate: "films,pilots" },
  }).then((response) => response.data);
};
