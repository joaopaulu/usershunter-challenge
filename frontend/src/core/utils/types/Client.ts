export interface ClientsResponse {
  results: Client[];
  totalPages: number;
}

export interface Client {
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: {
    large: string;
  };
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
  postcode: string;
  street: {
    name: string;
  };
}
