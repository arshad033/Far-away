import React from "react";
import Items from "./Items";
import { FaChevronDown } from "react-icons/fa";

function Area({ item, handleRemoveButton, handleClearButton, handleCheck }) {
  return (
    <div className="h-[63%] bg-red-800 p-8">
      <div className="justify-start flex h-[90%] gap-6 flex-wrap overflow-y-auto overflow-x-hidden">
        <Items val={item} handleRemoveButton={handleRemoveButton} handleCheck={handleCheck}/>
      </div>
      <div className="h-12 flex gap-4 justify-center items-center w-full">
        <h1 className="p-2 h-10 rounded-xl bg-indigo-100 w-max flex justify-center items-center gap-2">
          <p>Short by Packed Status</p> <span className="mt-1"><FaChevronDown /></span>
        </h1>
        <button className="bg-indigo-100 h-10 font-bold p-2 rounded-xl" onClick={handleClearButton}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default Area;
