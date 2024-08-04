import React from "react";
import Nav from "./components/Nav";
import Area from "./components/Area";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({totalNum: '', item: '', isChecked: false});
  const [item, setItem] = useState([])
  const handleChange = (e)=>{
	const {name, value} = e.target // we destructed name value properties from the e.target object
	  setValue((prev)=>({...prev, [name]:value}))
  }
  const handleSubmit = (e)=>{
	  e.preventDefault();
	  if(value.totalNum === '' || value.item === ''){
	  	alert('empthy value')
	  }
    else{
          setItem((prev)=>([...prev, value]));
          setValue({totalNum: '', item: '', isChecked: false});
    }
  }	
  const handleCheck = (ind)=>{
    const check = item.map((item, index)=>(index===ind?{...item ,isChecked:!item.isChecked}:item))
    setItem(check)
  }
  const handleRemoveButton = (ind)=>{
    const updatedItem = item.filter((item, index)=>index !== ind)
      setItem(updatedItem)
  }
  const handleClearButton = ()=>setItem([]);
  return (
    <div className="h-screen w-full">
      <Nav
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Area item={item} handleRemoveButton={handleRemoveButton} handleClearButton={handleClearButton} handleCheck={handleCheck}/>
      <Footer item={item}/>
    </div>
  );
}

export default App;
