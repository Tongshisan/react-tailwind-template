// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
import { useStuck } from './hooks/useStuck';

const App: React.FC = () => {

  const { foo } = useStuck();

  const func = () => {
    foo();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="pt-6">
            <button
              onClick={func}
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 !rounded-button cursor-pointer whitespace-nowrap"
            >
              提交问卷
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
