import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import {useState} from 'react';

function App() {
    const [listItems, setListItems] = useState("");
    const getData = async (text) => {
        const apiURL = "https://jsonplaceholder.typicode.com/" + text;
        const response = await fetch(apiURL);
        const items = await response.json();  
        setListItems(items);
    };

    return (
        <>
            <div className="buttons">
                <Users getData={getData} />
                <Posts getData={getData} />
                <Comments getData={getData} />
            </div>
            {listItems ? (
                <ul className="ul">
                    {listItems.map((item) => {
                        return <li>{JSON.stringify(item)}</li>;
                    })}
                </ul>
            ) : (
                <p 
                style={{textAlign: 'center'}}>
                Click on a button to get data!</p>
            )}
        </>
    );
}

export default App;
