import React, { useContext } from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed z-50">
      <div className=" bg-[#f1f1f0] w-72 rounded-md h-[550px] absolute top-8 right-3 text-slate-900 shadow-xl max-w-lg">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
