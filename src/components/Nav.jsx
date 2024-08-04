import React from "react";
import { LuPalmtree } from "react-icons/lu";
import { FaSuitcaseRolling } from "react-icons/fa6";

function Nav({ value, handleChange, handleSubmit }) {
  return (
    <div className="border-2 border-black h-[28%] w-full">
      <div className="bg-orange-400 h-[70%] text-6xl font-mono flex items-center justify-center font-extrabold">
        <p className="flex gap-4"><span><LuPalmtree /></span> 
Far Away
 <span><FaSuitcaseRolling /></span></p>
      </div>

      <div className="bg-orange-600 h-[30%] flex justify-center gap-8 items-center font-mono">
        <h1 className="text-lg font-bold">What do you need for your 😍 trip</h1>

        <form action="" className="flex gap-4" onSubmit={handleSubmit}>
          <input
            type="number"
            className="h-8 w-20 rounded-xl text-center"
            min="1"
            max="10"
            onChange={handleChange}
            name="totalNum"
            value={value.totalNum} />
          <input type="text" placeholder="item.." className="rounded-xl pl-2" 
          onChange={handleChange}
          name="item"
          value={value.item}
          />
          <input
            type="submit"
            className="bg-blue-400 text-white px-2 py-1 rounded-2xl font-semibold"
          />
        </form>
      </div>
    </div>
  );
}

export default Nav;
