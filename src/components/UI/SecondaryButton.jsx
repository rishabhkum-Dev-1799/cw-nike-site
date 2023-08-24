import React from "react";

const SecondaryButton = ({children,...props}) => {
  return (
    <button
      className="flex items-center justify-center p-4 rounded-full bg-white border-2 text-slate-gray text-lg"
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
