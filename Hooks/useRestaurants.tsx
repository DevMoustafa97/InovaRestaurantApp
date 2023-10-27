import { useState } from 'react';
import { useQuery } from 'react-query';
import { API_KEY, BASE_URL } from '../Api/apiConfig';




// Custom hook for fetching Details screen data
export function useDetailsScreenData(id:string | number) {
  const { data, isLoading, isError } = useQuery(['detailsScreenData', id], async () => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch details screen data');
    }
    return response.json();
  });

  return { data, isLoading, isError };
}
