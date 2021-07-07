import React from 'react';
import Modal from 'components/Modal';

type Props = {
  handleDismiss?: () => void;
};

const SimpleModal: React.FC<Props> = ({ handleDismiss = () => undefined }) => {
  return (
    <Modal title="Simple Modal" handleDismiss={handleDismiss}>
      <div className="text-center text-lg font-medium">Hello World</div>
      <button
        type="button"
        className="border border-red-500 p-2 rounded-xl text-sm font-medium bg-red-300 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleDismiss}
      >
        Close Modal
      </button>
    </Modal>
  );
};

export default SimpleModal;
