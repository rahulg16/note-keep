import React from "react";

function NoteBlock({ isSelected, onClick, title, description, date }) {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  // console.log(date);

  return (
    <div
      className={`w-[100%] h-[9rem] px-2 py-2 mb-4 rounded-lg ${
        isSelected === title ? "bg-gray-200" : "bg-slate-200/50"
      } cursor-pointer`}
      onClick={onClick}
    >
      <p
        className={`font-bold text-xs ${
          isSelected === title ? "text-black" : "text-gray-400"
        }`}
      >
        {`${day}-${month}-${year}`}
      </p>
      <h2
        className={`font-bold text-lg  my-2 ${
          isSelected === title ? "text-black" : "text-gray-400"
        }`}
      >
        {title}
      </h2>
      <p
        className={`font-bold text-sm ${
          isSelected === title ? "text-black" : "text-gray-400"
        } break-words`}
      >
        {description}
      </p>
    </div>
  );
}

export default NoteBlock;
