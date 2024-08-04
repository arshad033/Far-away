import React from 'react'

function Footer({item}) {
  const totalPacked = item.reduce((acc, item) => item.isChecked?acc + 1:acc, 0);
  const totalItems = item.length;
  const percentage = `${(totalPacked / totalItems)*100}%`; 
  return (
    <div className='h-[9%] bg-blue-300 flex justify-center items-center font-bold font-mono'>
      <h1>💼 You have {totalItems} items in your list, and you already packed {totalPacked}[{totalItems == ''?'0%':percentage}]</h1>
    </div>
  )
}

export default Footer