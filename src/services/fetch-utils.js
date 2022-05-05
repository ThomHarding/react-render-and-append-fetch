import { client } from './client.js';

export async function getAllCandies() {
  const response = await client
    .from('Candies')
    .select();
  return response.data;
}

export async function getAllMovies() {
  const response = await client
    .from('Movies')
    .select();
  return response.data;
}

export async function getAllSongs() {
  const response = await client
    .from('Songs')
    .select();
  return response.data;
}

export async function getAllColours() {
  const response = await client
    .from('Colours')
    .select();
  return response.data;
}