export interface ClientsResponse {
  results: Client[];
  totalPages: number;
}

export interface Client {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  phone: string;
  picture: Picture;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface Dob {
  age: number;
}

export interface Picture {
  large: string;
}
