import React from "react";


function PropDrilling({ username }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md max-w-sm">
      <h2 className="text-lg font-semibold">User Profile</h2>
      <p className="mt-2">Username: <span className="font-mono">{username}</span></p>
      <p className="text-sm text-gray-500 mt-1">(Received via props)</p>
    </div>
  );
}

function HeaderIcon({ username }) {
  return (
    <div className="flex items-center gap-3">
      <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-sm">👤</span>
      </button>

      
      <PropDrilling username={username} />
    </div>
  );
}

function Header({ username }) {
  return (
    <header className="w-full p-4 bg-indigo-600 text-white flex justify-between items-center">
      <div className="text-xl font-bold">My App</div>
      
      <HeaderIcon username={username} />
    </header>
  );
}

export default function App1() {
  
  const username = "Anisha";

  return (
    <div className="min-h-screen bg-gray-50">
      
      <Header username={username} />

      <main className="p-8">
        <p className="text-gray-700">This page shows prop drilling: App passes <code>username</code> to Header, which passes it to HeaderIcon, which passes it to UserProfile.</p>
      </main>
    </div>
  );
}
