export type UserRequest = {
  first: string;
  last: string;
  email: string;
  phone: string;
  picture: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
};

export type UserUpdateRequest = {
  id: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  picture: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
};
