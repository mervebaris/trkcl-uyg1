import React, {useState} from "react";

function Colors() {
    const [colors, setColors] = useState(["Red", "Green", "Blue"]);
    const handleClick = () => {
        setColors([...colors, "Orange"]);
    };
 
  return (
    <div>
        <h2>Colors</h2>
        {
        colors.map((colors,i) => (
            <div key={i}>{colors}</div>
            ))
        }

    <button onClick={handleClick}>Ekle</button>
    </div> 
  )
  

}

export default Colors;