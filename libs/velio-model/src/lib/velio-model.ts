export function velioModel(): string {
  return 'velio-model';
}
export interface UserDto {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: number;
}
export interface ParkDto {
  id: string;
  name: string;
  city: string;
  postalCode: number;
}
export interface BikeDto {
  id: string;
  model: string;
  number: number;
}
/*export interface StationDto {
  id: string;
  name: string;
  parks: number;
}*/

export const parksResourcePath = 'create-parks';
export const bikesResourcePath = 'create-bikes';
export const listParksResourcePath = 'list-parks';
export const listBikeResourcePath = 'list-bikes';
export const stationsResourcePath = 'stations';
export const usersResourcePath = 'users';
export const prefixePath = 'api';
