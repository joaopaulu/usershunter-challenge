export interface UsersResponse {
  results: UserList[];
  totalPages: number;
}

export interface User {
  first: string;
  last: string;
  email: string;
  phone: string;
  picture: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
}

export interface UserList {
  id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;

  picture: {
    large: string;
  };
  location: {
    city: string;
    state: string;
    postcode: string;
    street: {
      name: string;
    };
  };
}
