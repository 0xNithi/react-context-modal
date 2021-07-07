import React from 'react';
import useModal from 'hooks/useModal';
import SimpleModal from 'components/SimpleModal';

const App: React.FC = () => {
  const [handlePresent] = useModal(<SimpleModal />);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        type="button"
        className="border border-green-500 p-2 rounded-xl text-base font-medium bg-green-300 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handlePresent}
      >
        Open Modal
      </button>
    </div>
  );
};

export default App;
