import Box from "./Box";
import {useState} from 'react';

function App() {

  const [color, setColor] = useState("");

  return (
    <Box 
      color = {color}
      setColor = {setColor}
    />
  );
}

export default App;
