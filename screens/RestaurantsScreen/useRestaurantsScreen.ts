import { useState } from 'react';
import { useQuery } from 'react-query';
import { API_KEY, BASE_URL } from '../../Api/apiConfig';

export function useRestaurantsScreen() {
  const [location, setLocation] = useState('san jose');

  const { data, isLoading, isError } = useQuery(['homeScreenData', location], async () => {
    const response = await fetch(`${BASE_URL}/search?location=${location}&limit=50`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch home screen data');
    }
    return response.json();
  });

  return { data, isLoading, isError, setLocation };
}