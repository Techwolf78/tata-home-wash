import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-gray-100 py-4 flex justify-center gap-8 font-semibold text-gray-700">
      <div className="flex items-center gap-2">
        <CheckCircle className="text-blue-600" size={20} />
        500+ Cars Washed
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="text-blue-600" size={20} />
        Eco-Friendly Products
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="text-blue-600" size={20} />
        Rated 4.9/5 Stars
      </div>
    </div>
  );
}
