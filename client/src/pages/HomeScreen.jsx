import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import NoteBlock from "../components/NoteBlock";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { clearToken } from "../slices/userAuthSlice";
import BASE_URL from "../serverInfo";
import Alert from "../util/Alert";

const HomeScreen = () => {
  const [selectedNote, setSelectedNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  let [userData, setUserData] = useState({});
  let [alertMessage, setAlertMessage] = useState("");
  let [alertType, setAlertType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  async function fetchUserDetails() {
    let userID = await localStorage.getItem("_id");

    await fetch(`${BASE_URL}/api/users/${userID}`)
      .then((res) => res.json())
      .then((result) => {
        setUserData(result?.data?.[0]);
      })
      .catch((err) => console.log("Error -> fetchUserDetails:", err));
  }

  async function addUserFolder() {
    let userID = await localStorage.getItem("_id");

    await fetch(`${BASE_URL}/api/users/`, {
      method: "PATCH", // HTTP method
      headers: {
        "Content-Type": "application/json",
        folderName: "Journal",
        id: userID,
        // "Authorization": "Bearer YOUR_TOKEN",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserData(result?.data?.[0]);
      })
      .catch((err) => console.log("Error -> fetchUserDetails:", err));
  }

  async function logOut() {
    dispatch(clearToken(localStorage.clear("auth")));
    location.reload();
  }

  return (
    <div className="flex w-screen h-screen bg-gray-200">
      {/* Left Column */}
      <div className="w-[20%] h-screen bg-[#f6f6f6] p-4 flex flex-col justify-between">
        <div className="mb-6 max-h-[80vh]">
          <h2 className="text-[1rem] font-semibold">
            Welcome{" "}
            {Boolean(userData?.userName)
              ? userData?.userName.length > 10
                ? userData?.userName.slice(0, 10) + "..."
                : userData?.userName
              : "Anonymous"}
          </h2>

          <div className="rounded-lg my-6">
            <SearchBar />
          </div>

          <div className="w-[100%] flex-1 mt-10">
            {userData?.userFolder?.map((data, index) => {
              return (
                <Button
                  key={index}
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
                  buttonName={data}
                  isMore={true}
                />
              );
            })}
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
            onClick={logOut}
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

      {alertMessage.length > 0 && <Alert alertMessage={alertMessage} type={alertType} />}
    </div>
  );
};

export default HomeScreen;
