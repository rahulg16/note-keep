import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteBlock from "../components/NoteBlock";
import Button from "../components/Button";

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
      <div className="w-[20%] bg-[#f6f6f6] p-4 flex flex-col justify-between">
        <div className="mb-6 min-h-[80vh]">
          <h2 className="text-[1rem] font-semibold">Floyd Lawton</h2>
          {/* User Info Content */}

          <div className="rounded-lg my-6">
            <SearchBar />
          </div>

          <div className="w-[100%] flex-1 mt-10">
            <Button
              icon={
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
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              }
              buttonName={"My Notes"}
              isMore={true}
            />
          </div>
        </div>

        <div>
          <Button
            icon={
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
            }
            buttonName={"Add new folders"}
            isMore={false}
          />

          <Button
            icon={
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            }
            buttonName={"Log out"}
            isMore={false}
          />
        </div>
      </div>
      {/* Middle Column */}
      <div className="w-[30%] bg-white p-4 border-r-2 border-gray-200 border-solid">
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
          <NoteBlock
            onClick={() => setSelectedNote((p) => !p)}
            isSelected={selectedNote}
          />
        </div>
      </div>
      {/* Right Column */}
      <div className="w-[60%] bg-white p-4">
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
