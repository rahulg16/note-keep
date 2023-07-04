import React from 'react'

function NavBar() {
  return (
    <div className="w-screen p-[20px] flex flex-row justify-between items-center">
      <h2 className="font-semibold font-serif text-xl">Note Keep</h2>

      <div className="w-[180px] flex flex-row justify-between">
        <div className="py-2 px-5 flex items-center">
          <p className="text-black text-sm font-semibold">Log In</p>
        </div>

        <div className="bg-black rounded-[6px] py-2 px-5 flex items-center">
          <p className="text-white text-sm font-semibold">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar