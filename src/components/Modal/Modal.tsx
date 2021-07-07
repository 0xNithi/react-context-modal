import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  handleDismiss?: () => void;
};

const Modal: React.FC<Props> = ({ title, children, handleDismiss }) => (
  <div
    aria-hidden="true"
    className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 bg-black bg-opacity-50 z-30"
    onClick={handleDismiss}
  >
    <div
      aria-hidden="true"
      className="flex flex-col rounded-3xl shadow-lg bg-white z-40 w-80"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-5 pb-0 rounded-t">
        <div className="text-lg font-semibold">{title}</div>
        <button
          type="button"
          className="ml-4 text-black text-3xl font-semibold leading-none focus:outline-none"
          onClick={handleDismiss}
        >
          ×
        </button>
      </div>
      <div className="flex flex-col space-y-4 p-6">{children}</div>
    </div>
  </div>
);

export default Modal;
