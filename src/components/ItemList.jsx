import React from 'react';
import { MapPin, Calendar, Mail, ImageOff } from 'lucide-react';

function ItemCard({ item }) {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {item.imageUrl ? (
        <img src={item.imageUrl} alt={item.title} className="w-full h-44 object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      ) : (
        <div className="w-full h-44 bg-gray-100 grid place-items-center text-gray-400">
          <ImageOff className="w-6 h-6" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${item.type === 'lost' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
            {item.type === 'lost' ? 'Lost' : 'Found'}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
          {item.location && (
            <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {item.location}</span>
          )}
          {item.date && (
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {item.date}</span>
          )}
          {item.contact && (
            <span className="inline-flex items-center gap-1"><Mail className="w-4 h-4" /> {item.contact}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function ItemList({ items, emptyLabel }) {
  if (!items.length) {
    return (
      <div className="py-14 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
