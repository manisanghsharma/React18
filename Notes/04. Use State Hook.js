//!Use State Hook

//?To Import - 
import {useState} from 'react'

//*Use state hook allows to looks for changes in a component, when there are changes it rerenders the component - It can be called by useState()

//*The useState() take a value which is the default value of when the page is rendered - it can also take an arrow function which will only run once - that is when the page is loaded -

useState(0);
useState(() => {
    somefunction();
})

//* The useState() returns two values, which can be destructed like this - let us make an example of the click counter

const [count, setCount] = useState(0);

//* Now when the page is loaded, we will see the default value of count - 0 - to update this value - we will use the setter

<button onClick={() => useState(count + 1)}>Click it!</button>