// Define the structure for the Origin and Location objects
type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

// Define the structure for the Character object
export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

// Define the structure for the API response
export type GetAllCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};
