import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-s-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-white">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default PageLoader;
