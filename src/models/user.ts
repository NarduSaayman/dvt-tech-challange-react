export interface IUserProfile {
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  address: IAddress;
  phone: string;
}

interface IAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: IGeolocation;
}

interface IGeolocation {
  lat: string;
  long: string;
}

interface IName {
  firstname: string;
  lastname: string;
}

export interface IUserCredentials {
  username: string;
  password: string;
}
