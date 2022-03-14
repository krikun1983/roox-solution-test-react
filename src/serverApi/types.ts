export interface User {
  id: number;
  name: string;
  address: {city: string};
  company: {
    name: string;
  };
}

export type UserFull = User & {
  username: string;
  email: string;
  address: {street: string; zipcode: string};
  phone: string;
  website: string;
};
