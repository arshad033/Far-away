import React from "react";
import { RxCross2 } from "react-icons/rx";

function Items({ val, handleRemoveButton, handleCheck }) {
  return (
    <>
      {val.map((item, index) => (
        <div
          key={index}
          className="flex h-max text-white gap-4 text-xl font-semibold"
        >
          <input type="checkbox" className="w-6" onClick={()=>handleCheck(index)} />
          <h1 className={`flex gap-2 ${item.isChecked?'line-through':''}`}>
          {item.totalNum} {item.item}
          </h1>
          <button className="text-3xl font-extrabold text-red-400" onClick={()=>handleRemoveButton(index)}><RxCross2 /></button>
        </div>
      ))}
    </>
  );
}

export default Items;
