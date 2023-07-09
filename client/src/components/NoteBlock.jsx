import React from 'react'

function NoteBlock({isSelected, onClick, title, description, date}) {

  return (
    <div
      className={`w-[100%] h-[9rem] px-2 py-2 mb-4 rounded-lg ${
        isSelected ? "bg-gray-200" : "bg-[#fbfbfb]"
      }`}
      onClick={onClick}
    >
      <p
        className={`font-bold text-xs ${
          isSelected ? "text-black" : "text-gray-400"
        }`}
      >
        20 APR
      </p>
      <h2
        className={`font-bold text-lg  my-2 ${
          isSelected ? "text-black" : "text-gray-400"
        }`}
      >
        {title}
      </h2>
      <p
        className={`font-bold text-sm ${
          isSelected ? "text-black" : "text-gray-400"
        } break-words`}
      >
        {description}
      </p>
    </div>
  );
}

export default NoteBlock