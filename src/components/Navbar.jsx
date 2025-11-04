import React from 'react';
import { Search, PlusCircle } from 'lucide-react';

function Navbar({ currentPage, setCurrentPage, onOpenPost }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-semibold">L&F</div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Lost & Found Hub</h1>
            <p className="text-xs text-gray-500">Help items find their way home</p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === 'lost' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage('lost')}
          >
            Lost Items
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === 'found' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage('found')}
          >
            Found Items
          </button>
          <button
            onClick={onOpenPost}
            className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            title="Post an item"
          >
            <PlusCircle className="w-4 h-4" />
            Post Item
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
