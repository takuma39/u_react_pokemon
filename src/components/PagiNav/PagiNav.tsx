import React from "react";

export default function PagiNav({handlePrevPage, handleNextPage}) {
  return (
    <div className="flex justify-center">
      <button className="p-2" onClick={handlePrevPage}>
        前
      </button>
      <button className="p-2" onClick={handleNextPage}>
        次
      </button>
    </div>
  );
}
