import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [name, setName] = useState('Dave');

  function handleNameChange() {
    const nameArr = ["Radha", "Krishna", "Gaur", "Nitai", "Prabhupada Ji"];
    const rand = Math.floor(Math.random() * 5);
    return nameArr[rand];
  }

  const [count, setCount] = useState(0);
  const handleClick4 = () => {
    setCount(count + 1);
  }

  const handleClick = () => {
    console.log("You clicked it!");
  };

  const handleClick2 = (name) => {
    console.log(`${name} clicked it!`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {name} </p>
      <button onClick={handleClick}>1. Click it!</button>
      <button onClick={() => handleClick2("Manisangh Sharma")}>
        2. Click it!
      </button>
      <button onClick={(e) => handleClick3(e)}>3. Click it!</button>
      <button onClick={handleClick4}>4. Click it!</button>
      <p>You clicked the Third button {count} times!</p>
    </main>
  );
};

