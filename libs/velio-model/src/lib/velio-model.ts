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
}
export interface StationDto {
  id: string;
  name: string;
  parks: number;
}
export interface BikeDto {
  id: string;
  name: string;
  station: number;
  parks: number;
}
export const parksResourcePath = 'parks';
export const bikesResourcePath = 'bikes';
export const stationsResourcePath = 'stations';
export const usersResourcePath = 'users';
export const prefixePath = 'api';
