import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-700 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-9">Mytask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-3">Home</li>
        <li className="cursor-pointer hover:font-bold transition-3">Your tasks</li>
      </ul>
    </nav>
  );
};
