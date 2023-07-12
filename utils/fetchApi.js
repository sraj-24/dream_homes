import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
  headers: {
    'X-RapidAPI-Key': '00f65f3ea6msh1444562bd2da656p1e93f4jsn25c60bfd61b2',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  },
  });
    
  return data;
}

//headers: {
 //   'X-RapidAPI-Key': '00f65f3ea6msh1444562bd2da656p1e93f4jsn25c60bfd61b2',
  //  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  //}