import React from "react";
export default function StuffForm({handleAdd}) {
  const[name,setName] = React.useState("");
  const[price,setPrice] = React.useState(0);
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={(e) => setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={(e) => setPrice(parseFloat(e.target.value))}/>
      <button onClick={(e) => {
        handleAdd(name,price)
        e.preventDefault()}
        }>Add Stuff</button>
    </form>
  );
}
