import { Download } from "lucide-react";
import React from "react";

const ButtonFile: React.FC = () => {
  return (
    <button
      className="px-2 py-2 bg-[#1f3449] text-white rounded-lg hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg"
    >
      <Download />
    </button>
  );
};

export default ButtonFile;
