import { QueryCache } from 'react-query';

export const API_KEY = 'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx';
export const BASE_URL = 'https://api.yelp.com/v3/businesses';

const queryCache = new QueryCache();
// Function to clear the entire cache
export function clearCache() {
  queryCache.clear();
}