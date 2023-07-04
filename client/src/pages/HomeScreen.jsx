import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteBlock from "../components/NoteBlock";

const HomeScreen = () => {
  const [selectedNote, setSelectedNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Left Column */}
      <div className="w-1/4 bg-[#EEE2DE] p-4">
        <div className="mb-6">
          <h2 className="text-[1rem] font-semibold">Floyd Lawton</h2>
          {/* User Info Content */}
        </div>
        <div className="mb-4 rounded-lg">
          <SearchBar />
        </div>
      </div>
      {/* Middle Column */}
      <div className="w-1/4 bg-white p-4 border-r-2 border-gray-200 border-solid">
        <div className="mb-4 flex flex-col">
          <h2 className="text-2xl font-bold flex-grow mb-6">My Notes</h2>
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded flex items-center justify-start"
            onClick={handleAddNote}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <p className="font-semibold ml-4">Add Note</p>
          </button>
        </div>

        <div className="flex flex-col min-h-[80%]">
          <NoteBlock onClick={() => setSelectedNote(p => !p)} isSelected={selectedNote} />
        </div>
      </div>
      {/* Right Column */}
      <div className="w-2/4 bg-white p-4">
        <div>
          <h2 className="text-2xl font-bold break-words">Exploration Plans</h2>

          <p className="my-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            exercitationem, fuga expedita explicabo saepe molestiae, rem
            sapiente dolorum quod, laborum perferendis ipsam facere porro. Atque
            iusto assumenda facilis exercitationem quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
