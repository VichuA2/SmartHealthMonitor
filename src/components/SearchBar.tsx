import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (id: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchId, setSearchId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      onSearch(searchId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="relative">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter your Patient ID"
          className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}