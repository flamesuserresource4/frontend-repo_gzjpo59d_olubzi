import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

function App() {
  const [currentPage, setCurrentPage] = useState('lost'); // 'lost' | 'found'
  const [showPost, setShowPost] = useState(false);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([
    {
      id: 'ex1',
      type: 'lost',
      title: 'Lost black wallet',
      description: 'Black leather wallet with a silver logo. Contains ID and cards.',
      location: 'Central Park',
      date: '2025-10-20',
      contact: 'alex@example.com',
      imageUrl: ''
    },
    {
      id: 'ex2',
      type: 'found',
      title: 'Found keys with blue keychain',
      description: 'Set of 3 keys on a blue rubber keychain near the library entrance.',
      location: 'City Library',
      date: '2025-10-22',
      contact: '555-123-4567',
      imageUrl: ''
    }
  ]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return items
      .filter((i) => i.type === currentPage)
      .filter((i) =>
        !q ||
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        (i.location && i.location.toLowerCase().includes(q))
      );
  }, [items, currentPage, query]);

  const handleCreate = (item) => {
    setItems((prev) => [item, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onOpenPost={() => setShowPost(true)} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {currentPage === 'lost' ? 'Lost Items' : 'Found Items'}
            </h2>
            <p className="text-gray-500 text-sm">
              {currentPage === 'lost'
                ? 'Browse reports of missing belongings and help owners reconnect.'
                : 'See items that have been found and help return them to their owners.'}
            </p>
          </div>
          <div className="w-full md:w-96">
            <SearchBar
              query={query}
              setQuery={setQuery}
              placeholder={`Search ${currentPage === 'lost' ? 'lost' : 'found'} items...`}
            />
          </div>
        </div>

        <ItemList
          items={filtered}
          emptyLabel={
            currentPage === 'lost'
              ? 'No lost items yet. Be the first to report.'
              : 'No found items yet. Share what you found.'
          }
        />

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowPost(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
          >
            Post a {currentPage === 'lost' ? 'Lost' : 'Found'} Item
          </button>
        </div>
      </main>

      {showPost && (
        <PostForm
          defaultType={currentPage}
          onSubmit={handleCreate}
          onClose={() => setShowPost(false)}
        />
      )}

      <footer className="mt-16 py-10 text-center text-sm text-gray-500">
        Built with care — please verify ownership before transferring items.
      </footer>
    </div>
  );
}

export default App;
