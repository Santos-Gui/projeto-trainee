"use client"

export function Header() {
  return (
    <header className="bg-black">
      <div className="mx-8 flex justify-between py-2">
      <img src="public/logo.png" alt="Logo"/>
        <div className="flex space-x-2">
          <button className="border-orange text-orange rounded-lg border-2 bg-black p-1 px-5 font-bold hover:bg-gray-800">
            Log In
          </button>
          <button className="bg-orange rounded-lg p-1 px-5 font-bold text-white hover:bg-orange-700">
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-orange flex justify-between px-4 py-1">
        <div className="flex space-x-5 font-bold text-white">
          <a className="hover:underline">Games</a>
          <a className="hover:underline">News</a>
          <a className="hover:underline">Forum</a>
          <a className="hover:underline">Lists</a>
          <a className="hover:underline">Help</a>
        </div>
        <input
          type="text"
          placeholder="Search Games"
          className="rounded-lg border-1 border-black bg-white"
        />
      </div>
    </header>
  );
}
