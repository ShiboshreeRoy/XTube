import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import VideoGrid from '../components/Video/VideoGrid';

export default function Search() {
  const [searchParams] = useSearchParams();
  const { searchResults, isSearching, error } = useSearch();
  const query = searchParams.get('q') || '';

  if (isSearching) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-video"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Search results for: {query}
      </h2>
      {searchResults.length > 0 ? (
        <VideoGrid videos={searchResults} />
      ) : (
        <p className="text-gray-600">No videos found for "{query}"</p>
      )}
    </div>
  );
}