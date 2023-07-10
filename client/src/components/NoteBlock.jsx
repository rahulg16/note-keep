import React from "react";

let months = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC"
}

function NoteBlock({ isSelected, onClick, title, description, date }) {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  // console.log(date);

  return (
    <div
      className={`w-[100%] h-[10vh] px-2 py-2 mb-4 rounded-lg ${
        isSelected === title ? "bg-gray-200" : "bg-slate-200/50"
      } cursor-pointer`}
      onClick={onClick}
    >
      <p
        className={`font-bold text-xs ${
          isSelected === title ? "text-black" : "text-gray-400"
        }`}
      >
        {`${day} ${months[month]}`}
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
        {description.length > 80 ? description.slice(0, 80) + "..." : description}
      </p>
    </div>
  );
}

export default NoteBlock;
