export type Film = {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};

export type FilmPopulated = Film & {
  characters: People[];
  planets: Planet[];
  starships: Starship[];
};

export type People = {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
};

export type PeoplePopulated = People & {
  homeworld: Planet;
  films: Film[];
  starships: Starship[];
};

export type Planet = {
  id: number;
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
};

export type PlanetPopulated = Planet & {
  residents: People[];
  films: Film[];
};

export type Starship = {
  id: number;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
};

export type StarshipPopulated = Starship & {
  pilots: People[];
  films: Film[];
};


export type PaginationResponse<T> = {
  data: T[];
  totalPages: number;
  limit: number;
  total: number;
};