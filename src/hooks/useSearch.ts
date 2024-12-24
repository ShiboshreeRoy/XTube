import { useState, useCallback } from 'react';
import { api } from '../services/api';
import { Video } from '../types/video';

export function useSearch() {
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      const results = await api.searchVideos(query);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to perform search');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  }, []);

  return {
    searchResults,
    isSearching,
    error,
    performSearch,
  };
}