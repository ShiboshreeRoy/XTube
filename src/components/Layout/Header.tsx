import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiBell, FiVideo } from 'react-icons/fi';
import { useSearch } from '../../hooks/useSearch';
import UploadModal from '../Upload/UploadModal';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { performSearch, isSearching } = useSearch();
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    await performSearch(searchQuery);
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
        <div className="h-full flex items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">XTube</span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                disabled={isSearching}
              />
              <button
                type="submit"
                className="px-6 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 disabled:opacity-50"
                disabled={isSearching}
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
              title="Upload video"
            >
              <FiVideo className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiBell className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiUser className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </>
  );
}