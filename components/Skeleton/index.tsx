import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-lg shadow-md p-4">
        <div className="h-48 bg-gray-300 rounded-t-lg mb-4"></div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;